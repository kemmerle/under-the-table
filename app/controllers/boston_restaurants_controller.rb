class BostonRestaurantsController < ApplicationController

   def index
     @restaurants = BostonRestaurant.limit(10).order("RANDOM()")
   end

   def search
   end

   def show   
     @restaurant = BostonRestaurant.find(params[:id])
   end
end
