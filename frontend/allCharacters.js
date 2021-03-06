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