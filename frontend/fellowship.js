const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')
const oathSection = document.querySelector("#remove-a-character")

fetch(`http://localhost:3000/fellowships/${id}`)
    .then(response => response.json())
    .then(fellowship => {
            const h1 = document.createElement('h1')
            h1.textContent = fellowship.name
            document.querySelector('body').prepend(h1)
        })


    fetch(`http://localhost:3000/oaths`)
    .then(response => response.json())
    .then(oaths => { oaths.forEach(oath => {
        
        if(oath.fellowship.id == id){
            const oathCard = document.createElement("div")

            oathCard.className = "oath-class"
            oathCard.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front"
                    <h1>${oath.character.name}</h1>
                </div>
                <div class="flip-card-back">
                    <p>Race: ${oath.character.race}</p>
                    <p>Gender: ${oath.character.gender}</p>
                    <p>Height: ${oath.character.height}</p>
                    <p>Realm: ${oath.character.realm}</p>
                    <form id="remove-oath-form" action="http://localhost:3000/oaths/${oath.id}" method="POST" onsubmit="setTimeout(function(){window.location.reload();},50);">
                        <input type="hidden" name="_method" value="DELETE" />
                        <input type="submit" value="Remove from Fellowship">
                    </form>
                </div>
            </div>`
            oathSection.append(oathCard)
        }
    })
    })

    // const div = document.createElement('div')
    //     console.log(oath.character.name)

    //         // const partyMembers = fellowship.characters.map((character) => character.name).join(", ")
    //         // const p = document.createElement('p')
    //         // p.innerHTML = `Fellowship Members: ${partyMembers}`
    //         // document.querySelector('#fellowship-characters').append(p)
    //     const charCard = document.createElement("div")
    //     const name = document.createElement("h2")

    //     const deleteButton = document.createElement("div")
    //     deleteButton.innerHTML = `
    //     <form id="remove-oath-form" action="http://localhost:3000/oaths/${oath.id}" method="POST">
    //     <input type="hidden" name="_method" value="DELETE" />
    //     <input type="submit">
    //     </form>`

    //     name.textContent = oath.character.name 
    //     oathCard.append(name, deleteButton)
    //     oathSection.append(oathCard)