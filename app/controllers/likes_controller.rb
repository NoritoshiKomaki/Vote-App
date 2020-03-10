class LikesController < ApplicationController
  def create
    @like = Like.new(user_id: @current_user.id, twitter_id: params[:twitter_id])
    @like.save
    redirect_to("/twitters/#{params[:twitter_id]}")
  end

  def destroy
    @like = Like.find_by(user_id: @current_user.id, twitter_id: params[:twitter_id])
    @like.destroy
    redirect_to("/twitters/#{params[:twitter_id]}")
  end
end