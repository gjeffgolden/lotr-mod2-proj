const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')
const oathSection = document.querySelector("#remove-a-character")
const finalSection = document.querySelector("#final-link")

fetch(`http://localhost:3000/fellowships/${id}`)
    .then(response => response.json())
    .then(fellowship => {
            const h1 = document.createElement('h1')
            h1.textContent = fellowship.name
            document.querySelector('body').prepend(h1)

            if(fellowship.oaths.length > 0){
                const addMemeber = document.createElement('div')
        
                addMemeber.innerHTML = `<h2 class="add-members"><a href="/final.html?id=${fellowship.quest.id}">Complete Quest</a></h2>`

                finalSection.append(addMemeber)
            }
        })


    fetch(`http://localhost:3000/oaths`)
    .then(response => response.json())
    .then(showOaths)

    function showOaths(oaths){
        oaths.forEach(oath => {
        
            if(oath.fellowship.id == id){
                const div = document.createElement('div')
                const oathCard = document.createElement("div")
    
                div.className = "fellowship-char-info"
    
                oathCard.className = "oath-class"
                oathCard.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front"
                        <h2>${oath.character.name}</h2>
                        <img src="${oath.character.image}" alt="character-imgage" style="width:300px;height:300px;">
                    </div>
                    <div class="flip-card-back">
                        <p>Race: ${oath.character.race}</p>
                        <p>Gender: ${oath.character.gender}</p>
                        <p>Height: ${oath.character.height}</p>
                        <p>Realm: ${oath.character.realm}</p>
                        <form id="remove-oath-form" action="http://localhost:3000/oaths/${oath.id}" method="POST" onsubmit="setTimeout(function(){window.location.reload();},100);">
                            <input type="hidden" name="_method" value="DELETE" />
                            <input type="submit" value="Remove from Fellowship">
                        </form>
                    </div>
                </div>`
                div.append(oathCard)
                oathSection.append(div)
            }
        })
    }

