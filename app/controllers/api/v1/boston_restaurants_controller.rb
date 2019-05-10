class Api::V1::BostonRestaurantsController < ApplicationController
  def index
   @index_restaurants = BostonRestaurant.limit(10).order("RANDOM()")
   render json: @index_restaurants
  end

  def search
    query = params["query"]
    response = Unirest.get `https://data.boston.gov/api/3/action/datastore_search?resource_id=4582bec6-2b4f-4f9e-bc55-cbaa73117f4c&q=#{query}`

    render json: response.body
  end

  def show
    restaurant = BostonRestaurant.find(params[:id])
    render json: {
      restaurant: restaurant
    }
  end
end
