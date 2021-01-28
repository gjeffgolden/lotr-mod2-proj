class QuestsController < ApplicationController
  def index 
    @quests = Quest.all 
    render json: @quests, include: [:fellowships, :oaths, :characters]
  end

  def show 
    @quest = Quest.find params[:id]
    render json: @quest, include: [:fellowships, :oaths, :characters]
  end
end
