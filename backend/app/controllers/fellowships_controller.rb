class FellowshipsController < ApplicationController
  def index
    @fellowships = Fellowship.all 
    render json: @fellowships, include: [:characters, :quest, :oaths]
  end

  def show
    @fellowship = Fellowship.find params[:id]
    render json: @fellowship, include: [:characters, :quest, :oaths]
  end

  def create 
    @fellowship = Fellowship.create(
      name: params[:name],
      quest_id: params[:quest_id]
    )
    redirect_to "http://localhost:3001/quests.html?id=#{params[:quest_id]}"
  end

  def update 
    @fellowship = Fellowship.find params[:id]
    @fellowship.update(
      name: params[:name],
      quest_id: params[:quest_id]
    )
    redirect_to "http://localhost:3001/fellowship.html?id=#{params[:quest_id]}"
  end

  def destroy 
    @fellowship = Fellowship.find params[:id]
    @fellowship.destroy
    redirect_to "http://localhost:3001/allFellowships.html"
  end

end
