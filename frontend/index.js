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

    const ringGIF = document.createElement('img')
    ringGIF.src = "https://static.wikia.nocookie.net/lotr/images/a/a2/The_one_ring_animated.gif/revision/latest/top-crop/width/220/height/220?cb=20091103161137"

    questCard.append(questName, questDescription, ringGIF)
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