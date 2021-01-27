class FellowshipsController < ApplicationController
  def index
    @fellowships = Fellowship.all 
    render json: @fellowships, include: [:characters, :quest]
  end

  def show
    @fellowship = Fellowship.find params[:id]
    render json: @fellowship, include: [:characters, :quest]
  end

  def create 
    @fellowship = Fellowship.create(
      name: params[:name],
      quest_id: params[:quest_id]
    )
  end

  def update 
    @fellowship = Fellowship.find params[:id]
    @fellowship.update(
      name: params[:name],
      quest_id: params[:quest_id]
    )
    render json: @fellowship
  end

  def destroy 
    @fellowship = Fellowship.find params[:id]
    @fellowship.destroy
  end

end
