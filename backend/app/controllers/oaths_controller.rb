class OathsController < ApplicationController
  def index 
    @oaths = Oath.all 
    render json: @oaths, include: [:fellowship, :character, :quests]
  end

  def show 
    @oath = Oath.find params[:id]
    render json: @oath, include: [:fellowship, :character, :quests]
  end

  def create 
    @oath = Oath.create(
      character_id: params[:character_id],
      fellowship_id: params[:fellowship_id]
    )
    redirect_to "http://localhost:3001/characters.html?id=#{params[:character_id]}"
  end
  
  def destroy 
    @oath = Oath.find params[:id]
    @oath.destroy
  end
end
