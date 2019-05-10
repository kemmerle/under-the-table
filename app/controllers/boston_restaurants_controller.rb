class BostonRestaurantsController < ApplicationController

   def index
     @restaurants = BostonRestaurant.limit(10).order("RANDOM()")
   end

   def search
     render :search
   end

   def show
   end
end
