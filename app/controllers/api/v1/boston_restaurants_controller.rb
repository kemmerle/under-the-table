class Api::V1::BostonRestaurantsController < ApplicationController
  def index
   @index_restaurants = BostonRestaurant.limit(10).order("RANDOM()")
   render json: @index_restaurants
  end

  def search
    uri = URI("https://data.boston.gov/api/3/action/datastore_search?resource_id=4582bec6-2b4f-4f9e-bc55-cbaa73117f4c&q=#{params["formPayload"]["query"]}")
    response = Net::HTTP.get(uri)
    render json: response
  end

  def show
    restaurant_id = params[:id]
    uri = URI("https://data.boston.gov/api/3/action/datastore_search?resource_id=4582bec6-2b4f-4f9e-bc55-cbaa73117f4c&q=#{restaurant_id}")
    response = Net::HTTP.get(uri)
    render json: response
  end
end
