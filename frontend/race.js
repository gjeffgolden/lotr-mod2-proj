let raceArray = []

fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character => {
          if(!raceArray.includes(character.race)){
            raceArray.push(character.race)
            const li = document.createElement('li')

            li.textContent = character.race

            document.querySelector('#race-list').append(li)
          }
        })
      }
    )
