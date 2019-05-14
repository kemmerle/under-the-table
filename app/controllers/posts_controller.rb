class PostsController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end
end
