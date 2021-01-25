const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')

fetch(`http://localhost:3000/characters/${id}`)
    .then(response => response.json())
    .then(character => {
        const charHeader = document.createElement('h1')
        charHeader.innerHTML = `${character["name"]}`
        document.querySelector('body').prepend(charHeader)
    })

    fetch(`http://localhost:3000/characters/${id}`)
    .then(response => response.json())
    .then(character => {
        const charDetails = document.createElement('ul')
        charDetails.innerHTML = `
        <li>Height: ${character["height"]}</li>
        <li>Race: ${character["race"]}</li>
        <li>Gender: ${character["gender"]}</li>
        <li>Birth: ${character["birth"]}</li>
        <li>Death: ${character["death"]}</li>
        <li>Spouse: ${character["spouse"]}</li>
        <li>Realm: ${character["realm"]}</li>
        <li>Hair Color: ${character["hair"]}</li>
        <li><a href="${character["image"]}" target="_blank">LOTR Wiki Link</a></li>
        `
        document.querySelector('#character-details').append(charDetails)
    })