# require 'pry'
require 'json'
require 'rest-client'

@response = JSON.parse(RestClient.get("https://the-one-api.dev/v2/character", {
    Authorization: 'Bearer vO2ZfCY1l0CJi4rQFUba'
}))

Character.destroy_all

@response['docs'].each do |character|
    Character.create(
        height: character["height"], 
        race: character["race"], 
        gender: character["gender"],
        birth: character["birth"],
        spouse: character["spouse"],
        death: character["death"],
        realm: character["realm"],
        hair: character["hair"],
        name: character["name"],
        image: character["wikiUrl"]
    )
end

# binding.pry
