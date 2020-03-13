class TwittersController < ApplicationController
  before_action :authenticate_user, only: [:index, :new, :create, :show]
  def index
    @twitters = Twitter.search(params[:keyword], @current_user.id)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def new
    @twitter = Twitter.new
  end

  def create
    Twitter.create(twitter_params)
    redirect_to twitter_path
  end

  def show
    @twitters = Twitter.find(Like.group(:twitter_id).order('count(twitter_id) desc').pluck(:twitter_id))
    @twitters2 = Twitter.all
    @twitter = Twitter.find_by(id: params[:id])
  end

  def edit
    @twitters = Twitter.find(Like.group(:twitter_id).order('count(twitter_id) desc').pluck(:twitter_id))
  end

  private
  def twitter_params
    params.require(:twitter).permit(:name).merge(user_id: session[:user_id])
  end

end