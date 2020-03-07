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
  end

  private
  def twitter_params
    params.require(:twitter).permit(:name)
  end

end
