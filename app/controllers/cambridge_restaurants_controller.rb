class CambridgeRestaurantsController < ApplicationController
   def index
   end

   def search
     render :search
   end

   def show
     @restaurant = CambridgeRestaurant.find(params[:id])
   end
end
