class RestaurantsController < ApplicationController
   def index
     @posts = Post.all
   end

end
