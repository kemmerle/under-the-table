class Api::V1::BostonRestaurantsController < ApplicationController
  def index
   @index_restaurants = BostonRestaurant.limit(10).order("RANDOM()")
   render json: @index_restaurants
  end

  def search
    @restaurants = BostonRestaurant.where("businessname ILIKE ? OR comments ILIKE ?", "%#{params['query']}%", "%#{params['query']}%")
    render json: @restaurants
  end

  def show
    restaurant = BostonRestaurant.find(params[:id])
    render json: {
      restaurant: restaurant
    }
  end
end
