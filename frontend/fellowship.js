const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')

fetch(`http://localhost:3000/fellowships/${id}`)
    .then(response => response.json())
    .then(fellowship => {
            const h1 = document.createElement('h1')
            h1.textContent = fellowship.name
            document.querySelector('body').prepend(h1)
        })

    fetch(`http://localhost:3000/fellowships/${id}`)
    .then(response => response.json())
    .then(fellowship => {
            const partyMembers = fellowship.characters.map((character) => character.name).join(", ")
            const p = document.createElement('p')
            p.innerHTML = `Fellowship Members: ${partyMembers}`
            document.querySelector('#fellowship-characters').append(p)
        })