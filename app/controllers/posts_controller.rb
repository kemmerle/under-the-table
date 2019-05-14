class PostsController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new post_params.merge(user: current_user)

    if @post.save
      redirect_to posts_path
      flash[:notice] = "Your post has been added successfully"
    else
      flash.now[:notice] =
      @post.errors.full_messages.join(', ')
      render :new
    end
  end

  private
  def post_params
    params.require(:post).permit(
      :title,
      :body,
      :user_id
    )
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = "You must be signed in to create a new post"
      redirect_to posts_path 
    end
  end
end
