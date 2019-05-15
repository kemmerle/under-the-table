class RepliesController < ApplicationController
  def new
    @post = Post.find(params[:post_id])
    @reply = Reply.new
  end

  def create
    @post = Post.find(params[:post_id])
    @reply = Reply.new(reply_params)
    @reply.user_id = current_user.id 
    @reply.post = @post

    if @reply.save
      flash[:notice] = "Your reply has been added successfully!"
      redirect_to post_path(@post)
    else
      render :new
    end
  end

  protected

  def reply_params
    params.require("reply").permit(:body)
  end
end
