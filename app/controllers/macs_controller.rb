class MacsController < ApplicationController
  def index
  end

  def new
    @mac = Mac.new
  end

  def create
    Mac.create(mac_params)
    redirect_to mac_path(1)
  end

  def show
    @macs = Mac.all
    @air = @macs.where(spec: 1)
    @inch13 = @macs.where(spec: 2)
    @inch16 = @macs.where(spec: 3)
    @macbook = ({ "MacBook Air": @air.count, "MacBook Pro 13inch": @inch13.count, "MacBook Pro 15-16inch": @inch16.count })
  end

  private
  def mac_params
    params.require(:mac).permit(:spec, :cpu, :memory, :storage)
  end

end
