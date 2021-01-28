# require 'pry'
require 'json'
require 'rest-client'

@response = JSON.parse(RestClient.get("https://the-one-api.dev/v2/character", {
    Authorization: 'Bearer vO2ZfCY1l0CJi4rQFUba'
}))

@elf_image = "https://images7.alphacoders.com/585/585249.jpg"
@dwarf_image = "https://images.alphacoders.com/172/172383.jpg"
@human_image = "https://images2.alphacoders.com/225/225320.jpg"
@dragon_image = "https://images2.alphacoders.com/482/482318.jpg"
@orc_image = "https://images3.alphacoders.com/779/779588.jpg"
@wizard_image = "https://images8.alphacoders.com/102/1023061.jpg"
@hobbit_image = "https://images.alphacoders.com/531/531432.jpg"

Oath.destroy_all
Fellowship.destroy_all
Quest.destroy_all
Character.destroy_all

@response['docs'].each do |character|
    if character["race"] == "Elf"
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
        link: character["wikiUrl"],
        image: @elf_image
    )
    elsif character["race"] == "Dwarf"
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
        link: character["wikiUrl"],
        image: @dwarf_image
    )
    elsif character["race"] == "Human"
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
        link: character["wikiUrl"],
        image: @human_image
    )
    elsif character["race"] == "Hobbit"
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
        link: character["wikiUrl"],
        image: @hobbit_image
    )
    elsif character["race"] == "Maiar"
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
        link: character["wikiUrl"],
        image: @wizard_image
    )
    elsif character["race"] == "Dragons"
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
        link: character["wikiUrl"],
        image: @dragon_image
    )
    elsif character["race"] == "Orc"
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
        link: character["wikiUrl"],
        image: @orc_image
    )
    end
end


quest1 = Quest.create(
    name: "Destroy the One Ring", 
    description: "Take the ring to Mordor and throw it into Mount Doom.",
    image: "https://images4.alphacoders.com/239/23968.jpg",
    audio: "/audio/MinasTirith.mp3",
    video: "https://www.youtube.com/embed/c24-0Amwyik"
)

quest2 = Quest.create(
    name: "Fight Smaug on the Lonely Mountain", 
    description: "Cleanse the Lonely Mountain of the dragon menace and recover lost Dwarven treasure.",
    image: "https://images2.alphacoders.com/530/530539.jpg",
    audio: "/audio/Helm'sDeep.mp3",
    video: "https://www.youtube.com/embed/v5llnbqhLZM"
)

quest3 = Quest.create(
    name: "Remove the Evil from Mirkwood", 
    description: "Investigate the growing darkness in Mirkwood and expel it.",
    image: "https://images8.alphacoders.com/101/thumb-1920-1019233.jpg",
    audio: "/audio/HopeFails.mp3",
    video: "https://www.youtube.com/embed/IIN_NGHLR5s"
)

quest4 = Quest.create(
    name: "Protect the Hobbits in the Shire", 
    description: "Defeat the orc army invading the Shire.",
    image: "https://images4.alphacoders.com/644/644695.png",
    audio: "/audio/AKnifeintheDark.mp3",
    video: "https://www.youtube.com/embed/ufFOghMt1yI"
)

quest5 = Quest.create(
    name: "Conquer Middle-Earth", 
    description: "Retrieve the One Ring and return it to Sauron for glory and riches.",
    image: "https://images2.alphacoders.com/236/236060.jpg",
    audio: "/audio/TheBlackGateOpens.mp3",
    video: "https://www.youtube.com/embed/_qE5FSG6K0Y"
)

# binding.pry
