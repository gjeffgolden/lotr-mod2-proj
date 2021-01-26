const questCardSection = document.querySelector('#quest-cards')

const baseURL = "http://localhost:3000"
let questURL = `${baseURL}/quests`

fetch(questURL)
    .then(response => response.json())
    .then(displayQuests)

function displayQuests (quests) {
    quests.forEach(showQuest)
}

function showQuest(quest) {
    const questCard = document.createElement('div')

    const questName = document.createElement('h3')
    questName.innerHTML = `<a href="/quests.html?id=${quest.id}">${quest.name}</a>`

    const questDescription = document.createElement('p')
    questDescription.textContent = quest.description

    questCard.append(questName, questDescription)
    questCardSection.append(questCard)
} 

// fetch('http://localhost:3000/characters')
//     .then(response => response.json())
//     .then(characters => {
//         characters.forEach(character => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//             <a href="/characters.html?id=${character.id}">${character.name}</a>
//             `
//             document.querySelector('#character-list').append(li)
//         })
//     })