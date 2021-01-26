# require 'pry'
require 'json'
require 'rest-client'

@response = JSON.parse(RestClient.get("https://the-one-api.dev/v2/character", {
    Authorization: 'Bearer vO2ZfCY1l0CJi4rQFUba'
}))

Oath.destroy_all
Fellowship.destroy_all
Quest.destroy_all
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
        link: character["wikiUrl"]
    )
end

quest1 = Quest.create name: "Destroy the One Ring", description: "Take the ring to Mordor and throw it into Mount Doom."
quest2 = Quest.create name: "Fight Smaug on the Lonely Mountain", description: "Cleanse the Lonely Mountain of the dragon menace and recover lost Dwarven treasure."
quest3 = Quest.create name: "Remove the Evil from Mirkwood", description: "Investigate the growing darkness in Mirkwood and expel it."
quest4 = Quest.create name: "Protect the Hobbits in the Shire", description: "Defeat the orc army invading the Shire."
quest5 = Quest.create name: "Conquer Middle-Earth", description: "Retrieve the One Ring and return it to Sauron for glory and riches."

# binding.pry
