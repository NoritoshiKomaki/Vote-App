class OnlinesController < ApplicationController
  def new
    @online = Online.new
  end

  def create
    Online.create(online_params)
    redirect_to root_path
  end

  def show
    @onlines = Online.find(Like2.group(:online_id).order('count(online_id) desc').pluck(:online_id))
    @onlines2 = Online.all
    @online = Online.find_by(id: params[:id])
  end

  def edit
    @onlines = Online.find(Like2.group(:online_id).order('count(online_id) desc').pluck(:online_id))
  end

  private
  def online_params
    params.require(:online).permit(:name).merge(user_id: session[:user_id])
  end
end
