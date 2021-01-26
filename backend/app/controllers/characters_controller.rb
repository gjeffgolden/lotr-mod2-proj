require 'pry'
class CharactersController < ApplicationController

    def index
        if params["race"]
            # @characters = Character.where(race: params["race"])
            # render json: @characters
            @characters = Character.all 
            @characters.filter { |character| character.race == params["race"]}
            render json: @characters
        else
            @characters = Character.all 
            render json: @characters
        end
        # @characters = Character.all 
        # @characters.filter { |character| character.race == params["race"]}
        # render json: @characters
        binding.pry
    end

    def show
        @character = Character.find params[:id]
        render json: @character
    end

end
