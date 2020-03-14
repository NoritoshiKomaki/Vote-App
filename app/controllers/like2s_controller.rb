class Like2sController < ApplicationController
  before_action :set_variables2

  def create
    @like2 = Like2.new(user_id: @current_user.id, online_id: params[:online_id])
    @like2.save
  end

  def destroy
    @like2 = Like2.find_by(user_id: @current_user.id, online_id: params[:online_id])
    @like2.destroy
  end

  private

  def set_variables2
    @online = Online.find(params[:online_id])
    @id_name2 = "#like2-link-#{@online.id}"
  end
end
