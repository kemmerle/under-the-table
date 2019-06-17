class Api::V1::CambridgeRestaurantsController < ApplicationController
  def index
   @index_restaurants = CambridgeRestaurant.limit(10).order("RANDOM()")
   render json: @index_restaurants
  end

  def search
    @restaurants = CambridgeRestaurant.where(
      "establishment_name ILIKE ? OR code_description ILIKE ?",
      "%#{params["formPayload"]["query"]}%",
      "%#{params["formPayload"]["query"]}%")
    render json: @restaurants
  end

  def review
    uri = URI("https://maps.googleapis.com/maps/api/place/findplacefromtext/output?#{params["query"]}")
    response = Net::HTTP.get(uri)
    render json: response
  end

  def serialized_cam_restaurants
    ActiveModel::Serializer::ArraySerializer
      .new(CambridgeRestaurant.where(
        address: CambridgeRestaurant.find(params[:id]).address),
      each_serializer: CambridgeRestaurantSerializer)
  end

  def show
    render json: { restaurants: serialized_cam_restaurants }
  end
end
