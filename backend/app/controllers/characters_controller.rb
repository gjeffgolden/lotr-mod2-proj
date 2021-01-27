class CharactersController < ApplicationController

    def index
        if params["race"]
            @characters = Character.where(race: params['race'])
            render json: @characters
        else
            @characters = Character.all 
            render json: @characters, include: [:oaths, :fellowships]
        end
    end

    def show
        @character = Character.find params[:id]
        render json: @character, include: [:oaths, :fellowships]
    end

end
