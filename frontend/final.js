const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')

fetch(`http://localhost:3000/quests/${id}`)
.then(response => response.json())
.then(quest=> {
      const h1 = document.createElement('h1')
      const h3 = document.createElement('h3')
      const audio = document.createElement('li')
      const image = document.createElement('span')


      audio.innerHTML = `
      <audio controls>
          <source src="${quest.audio}" type="audio/mpeg">
          Your browser does not support the audio element.
      </audio>
      `
      image.innerHTML=`<img src="${quest.image}" style="width:80%; height:80%;">
      `
      h1.textContent = `Quest: ${quest.name}`
      h3.textContent = `Description: ${quest.description}`

      document.querySelector('body').prepend(h1)
      document.querySelector('#quest-section').append(h3)
      document.querySelector('#nav-bar').append(audio)
      document.querySelector('#image-section').append(image)
      console.log(quest.characters)
      quest.characters.forEach( character => {
        const charH3 = document.createElement('h3')

        charH3.textContent = character.name 

        document.querySelector('body').append(charH3)
      })
})

fetch(`http://localhost:3000/oaths`)
.then(response => response.json())
.then(oaths => oaths.forEach(oath => {
  console.log(oath.fellowship.quest)
}))


