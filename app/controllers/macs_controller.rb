class MacsController < ApplicationController
  def index
  end

  def new
    @mac = Mac.new
  end

  def create
    Mac.create(mac_params)
  end

  def show
  end

  private
  def mac_params
    params.require(:mac).permit(:spec, :cpu, :memory, :storage)
  end

end
