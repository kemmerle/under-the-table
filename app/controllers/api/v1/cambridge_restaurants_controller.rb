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

  def serialized_cam_restaurants
    ActiveModel::Serializer::ArraySerializer
      .new(CambridgeRestaurant.where(
        address: CambridgeRestaurant.find(params[:id]).address),
      each_serializer: CambridgeRestaurantSerializer)
  end

  def show
    # @restaurant = CambridgeRestaurant.find(params[:id])
    render json: { restaurants: serialized_cam_restaurants }
  end

end
