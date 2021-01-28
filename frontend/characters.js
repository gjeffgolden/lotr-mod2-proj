const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')
const form = document.querySelector('#oath-form')
const oathSection = document.querySelector('#fellowship-section')


form.action = `http://localhost:3000/oaths?character_id=${id}`

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
        <li><a href="${character["link"]}" target="_blank">LOTR Wiki Link</a></li>
        `
        document.querySelector('#character-details').append(charDetails)
    })

    fetch(`http://localhost:3000/fellowships/`)
    .then(response => response.json())
    .then(fellowships =>
        fellowships.forEach(fellowship=> {
            const option = document.createElement('option')

            option.textContent = fellowship.name
            option.value = fellowship.id

            document.querySelector('#fellowship-dropdown').append(option)
        })
    )

    // fetch(`http://localhost:3000/oaths`)
    // .then(response => response.json())
    // .then(oaths => oaths.forEach(oath => {
    //     if(oath.character.id == id){
    //         const option = document.createElement('option')

    //         option.textContent = oath.fellowship.name
    //         option.value = oath.id

    //         document.querySelector('#remove-fellowship-dropdown').append(option)
    //     }
    // }))

    fetch(`http://localhost:3000/oaths`)
    .then(response => response.json())
    .then(oaths => oaths.forEach(showOath))

    function showOath(oath){
        if(oath.character.id == id){
        const oathCard = document.createElement("div")

        const name = document.createElement("h2")

        const deleteButton = document.createElement("div")
        deleteButton.innerHTML = `
        <form id="remove-oath-form" action="http://localhost:3000/oaths/${oath.id}" method="POST" onsubmit="setTimeout(function(){window.location.reload();},10);">
        <input type="hidden" name="_method" value="DELETE" />
        <input type="submit" value="Remove from Fellowship">
    </form>`

        name.textContent = oath.fellowship.name 
        oathCard.append(name, deleteButton)
        oathSection.append(oathCard)
        }
    }