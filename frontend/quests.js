const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')
const questDropdown = document.querySelector('#quest-dropdown')

fetch(`http://localhost:3000/quests/${id}`)
    .then(response => response.json())
    .then(quest => {
      const h1 = document.createElement('h1')
      const h3 = document.createElement('h3')

      h1.textContent = `Quest: ${quest.name}`
      h3.textContent = `Description: ${quest.description}`

      document.querySelector('#quest-section').append(h1)
      document.querySelector('#quest-section').append(h3)
    })

fetch(`http://localhost:3000/quests/`)
  .then( response => response.json())
  .then( quests => quests.forEach(quest => {
    const option = document.createElement('option')

    option.value = quest.id 
    option.textContent = quest.name
    questDropdown.append(option)
  }))