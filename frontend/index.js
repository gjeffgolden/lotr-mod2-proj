let charArray = []

fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character => {
            const li = document.createElement('li')
            li.innerHTML = `
            <a href="${character.image}" target="_blank">${character.name}</a>
            `
            document.querySelector('#character-list').append(li)
        })
    })