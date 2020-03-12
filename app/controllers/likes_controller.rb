class LikesController < ApplicationController
  before_action :set_variables

  def create
    @like = Like.new(user_id: @current_user.id, twitter_id: params[:twitter_id])
    @like.save
  end

  def destroy
    @like = Like.find_by(user_id: @current_user.id, twitter_id: params[:twitter_id])
    @like.destroy
  end

  private

  def set_variables
    @twitter = Twitter.find(params[:twitter_id])
    @id_name = "#like-link-#{@twitter.id}"
  end

end