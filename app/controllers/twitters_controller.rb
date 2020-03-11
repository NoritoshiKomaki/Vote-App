class TwittersController < ApplicationController
  def new
    @twitter = Twitter.new
  end

  def create
    Twitter.create(twitter_params)
    redirect_to "/twitters/1"
  end

  def show
    @twitters = Twitter.find(Like.group(:twitter_id).order('count(twitter_id) desc').pluck(:twitter_id))
    @twitters2 = Twitter.all
    @twitter = Twitter.find_by(id: params[:id])
  end

  private
  def twitter_params
    params.require(:twitter).permit(:name).merge(user_id: session[:user_id])
  end

end
