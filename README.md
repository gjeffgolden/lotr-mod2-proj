# Lord of the Rings: Choose Your Quest!
### Flatiron School Mod 2 Pair Project (Full Stack Web App)
##### Colton O'Connor ( @bigdumbbaby ) and Jeff Golden ( @gjeffgolden )



## Introduction
"Lord of the Rings: Choose Your Quest!" allows users to select from a set of 5 LOTR-themed adventures and create a Fellowship to complete the journey. A user can name the Fellowship whatever they want, and then choose from a list of 700+ characters to add to their party. Once their team is set, the user can launch the quest. The final page includes embedded video and audio, an image unique to that adventure, and a pass/fail message based on a simple algorithm.

## Overview Video
[YouTube Link]()

## Technologies

1. Ruby on Rails (backend)
2. HTML/CSS/JavaScript (frontend)
3. [Lord of the Rings API](https://the-one-api.dev/)

## Schema
We seeded a list of 933 characters from the [Lord of the Rings API](https://the-one-api.dev/)—thank you!. In addition to the Character class, we included classes for Fellowships, Oaths and Quests. Fellowships and Characters are linked via a many-to-many (M:M) relationship with Oaths as a joiner. Each Fellowship also belongs to a Quest, which has many Fellowships (1:M).

## Code Excerpt
```
let raceArray = []

const backendBaseURL = 'http://localhost:3000'
let charactersURL = `${backendBaseURL}/characters`

const filterParams = new URLSearchParams(window.location.search)
const charRace = filterParams.get('race')

if (charRace) {
    charactersURL = `${charactersURL}?race=${charRace}`
}

fetch('http://localhost:3000/characters')
.then(response => response.json())
.then(characters => {
  const smallerList = characters.filter((character) => 
    character.race === "Human" ||
    character.race === "Dwarf" ||
    character.race === "Elf" ||
    character.race === "Hobbit" ||
    character.race === "Maiar" ||
    character.race === "Dragons" ||
    character.race === "Orcs"
    )
  smallerList.forEach(character => {
    if(!raceArray.includes(character.race)){
      raceArray.push(character.race)
      const option = document.createElement('option')
      option.textContent = character.race
      option.value = character.race
      document.querySelector('#race-dropdown').append(option)
    }
  })
})

fetch(charactersURL)
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character => {
            const li = document.createElement('li')
            li.innerHTML = `
            <a href="/characters.html?id=${character.id}">${character.name}</a>
            `
            document.querySelector('#filtered-characters').append(li)
        })
    })
```