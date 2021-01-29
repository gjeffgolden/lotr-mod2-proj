const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')
const charSection = document.querySelector("#character-section")
const winLoose = document.querySelector("#win-loose")

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomNumber = getRandomInt(7)

fetch(`http://localhost:3000/quests/${id}`)
.then(response => response.json())
.then(quest=> {
      const h1 = document.createElement('h1')
      const h3 = document.createElement('h3')
      const audio = document.createElement('li')
      const image = document.createElement('span')
      const video = document.createElement('span')

      video.innerHTML = `
      <iframe width="560" height="315" src="${quest.video}" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `

      audio.innerHTML = `
      <audio controls autoplay>
          <source src="${quest.audio}" type="audio/mpeg">
          Your browser does not support the audio element.
      </audio>
      `
      image.innerHTML=`<img src="${quest.image}" alt="Lord of the Rings fan art" style="width:80%; height:80%;">
      `
      h1.textContent = `Quest: ${quest.name}`
      h3.textContent = `Description: ${quest.description}`

      document.querySelector('body').prepend(h1)
      document.querySelector('#quest-section').append(h3)
      document.querySelector('#nav-bar').append(audio)
      document.querySelector('#image-section').append(image)
      document.querySelector('#quest-video').append(video)

      let charactersLength = quest.characters.length 

      quest.characters.forEach( character => {
        const div = document.createElement('div')
        const charCard = document.createElement('div')

        div.className = 'fellowship-char-info'
        charCard.className = 'oath-class'

        charCard.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front"
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="character-image" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
              <p>Race: ${character.race}</p>
              <p>Gender: ${character.gender}</p>
              <p>Height: ${character.height}</p>
              <p>Realm: ${character.realm}</p>
                      
            </div>
        </div>
        `
        div.append(charCard)
        charSection.append(div)
      })

if(charactersLength < randomNumber){
  const looseMessage = document.createElement("h2") 
  looseMessage.textContent = "Sorry, the quest was not a success. Maybe try adding more members to your fellowship."
  winLoose.append(looseMessage)
}else{
  const winMessage = document.createElement("h2") 
  winMessage.textContent = "Congratulations! The fellowship was successful in the mission."
  winLoose.append(winMessage)
}})


