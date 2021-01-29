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
    questCard.className = "quest-card-class"

    const questName = document.createElement('h3')
    questName.innerHTML = `<a href="/quests.html?id=${quest.id}">${quest.name}</a>`

    const questDescription = document.createElement('p')
    questDescription.textContent = quest.description

    questCard.append(questName, questDescription)
    questCardSection.append(questCard)
} 