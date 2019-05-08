class Api::V1::BostonRestaurantsController < ApplicationController

  def search
    @restaurants = BostonRestaurant.where("businessname ILIKE ? OR comments ILIKE ?", "%#{params['query']}%", "%#{params['query']}%")
    render json: @restaurants
  end
end
