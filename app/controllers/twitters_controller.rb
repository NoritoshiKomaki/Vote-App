class TwittersController < ApplicationController
  def new
    @twitter = Twitter.new
  end

  def create
    Twitter.create(twitter_params)
    redirect_to twitter_path(1)
  end

  def show
    @twitters = Twitter.all
    @twitter = Twitter.find_by(id: params[:id])
  end

  private
  def twitter_params
    params.require(:twitter).permit(:name).merge(user_id: session[:user_id])
  end

end
