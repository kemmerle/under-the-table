class CambridgeRestaurantsController < ApplicationController

   def index
     @restaurants = CambridgeRestaurant.limit(10).order("RANDOM()")
   end

   def search
     render :search
   end

   def show
     @restaurant = CambridgeRestaurant.find(params[:id])
   end
end
