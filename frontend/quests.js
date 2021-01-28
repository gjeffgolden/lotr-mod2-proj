const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')
const questDropdown = document.querySelector('#quest-dropdown')
const form = document.querySelector('#fellowship-form')
const fellowshipSection = document.querySelector('#fellowship-section')

form.action = `http://localhost:3000/fellowships?quest_id=${id}`
console.log(form.action)

fetch(`http://localhost:3000/quests/${id}`)
    .then(response => response.json())
    .then(quest => {
      const h1 = document.createElement('h1')
      const h3 = document.createElement('h3')

      h1.textContent = `Quest: ${quest.name}`
      h3.textContent = `Description: ${quest.description}`

      document.querySelector('body').prepend(h1)
      document.querySelector('#quest-section').append(h3)
    })

    fetch(`http://localhost:3000/fellowships`)
    .then(response => response.json())
    .then(oaths => oaths.forEach(showFellowship))

    function showFellowship(fellowship){
        if(fellowship.quest.id == id){
        const fellowshipCard = document.createElement("div")
        fellowshipCard.className = "quest-card-class"

        const name = document.createElement("h2")

        name.innerHTML = `<a href="http://localhost:3001/fellowship.html?id=${fellowship.id}">${fellowship.name}</a>` 
        fellowshipCard.append(name)
        fellowshipSection.append(fellowshipCard)
        }
    }



// fetch(`http://localhost:3000/quests/`)
//   .then( response => response.json())
//   .then( quests => quests.forEach(quest => {
//     const option = document.createElement('option')

//     option.value = quest.id 
//     option.textContent = quest.name
//     questDropdown.append(option)
//   }))