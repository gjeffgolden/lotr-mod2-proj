class OathsController < ApplicationController
  def index 
    @oaths = Oath.all 
    @render json: @oaths
  end

  def show 
    @oath = Oath.find params[:id]
  end

  def create 
    @oath = Oath.create(
      character_id: params[:character_id],
      fellowship_id: params[:fellowship_id]
    )
  end
  
  def destroy 
    @oath = Oath.find params[:id]
    @oath.destroy
  end
end
