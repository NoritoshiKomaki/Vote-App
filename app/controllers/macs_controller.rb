class MacsController < ApplicationController
  before_action :authenticate_user, only: [:new, :create]

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
    gon.air_spec = @macs.where(spec: 1).count
    gon.inch13_spec = @macs.where(spec: 2).count
    gon.inch16_spec = @macs.where(spec: 3).count
    gon.air_memory1 = @air.where(memory: 1).count
    gon.air_memory2 = @air.where(memory: 2).count
    gon.air_storage1 = @air.where(storage: 1).count
    gon.air_storage2 = @air.where(storage: 2).count
    gon.air_storage3 = @air.where(storage: 3).count
    gon.air_storage4 = @air.where(storage: 4).count
    gon.inch13_cpu1 = @inch13.where(cpu: 1).count
    gon.inch13_cpu2 = @inch13.where(cpu: 2).count
    gon.inch13_memory1 = @inch13.where(memory: 1).count
    gon.inch13_memory2 = @inch13.where(memory: 2).count
    gon.inch13_storage1 = @inch13.where(storage: 1).count
    gon.inch13_storage2 = @inch13.where(storage: 2).count
    gon.inch13_storage3 = @inch13.where(storage: 3).count
    gon.inch13_storage4 = @inch13.where(storage: 4).count
    gon.inch13_storage5 = @inch13.where(storage: 5).count
    gon.inch16_cpu1 = @inch16.where(cpu: 1).count
    gon.inch16_cpu2 = @inch16.where(cpu: 2).count
    gon.inch16_memory1 = @inch16.where(memory: 1).count
    gon.inch16_memory2 = @inch16.where(memory: 2).count
    gon.inch16_memory3 = @inch16.where(memory: 3).count
    gon.inch16_storage1 = @inch16.where(storage: 1).count
    gon.inch16_storage2 = @inch16.where(storage: 2).count
    gon.inch16_storage3 = @inch16.where(storage: 3).count
    gon.inch16_storage4 = @inch16.where(storage: 4).count
    gon.inch16_storage5 = @inch16.where(storage: 5).count
  end

  private
  def mac_params
    params.require(:mac).permit(:spec, :cpu, :memory, :storage)
  end

end
