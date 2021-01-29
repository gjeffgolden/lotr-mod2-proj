fetch("http://localhost:3000/fellowships")
    .then(response => response.json())
    .then(fellowships => {
        fellowships.forEach(fellowship => {
            const div = document.createElement('div')
            div.className = "quest-card-class"
            div.innerHTML = `
            <h3><a href="http://localhost:3001/fellowship.html?id=${fellowship.id}">${fellowship.name}</a></h3>
            `

            if(fellowship.oaths.length === 0){
                const deleteButton = document.createElement("div")
                deleteButton.innerHTML = `
                    <form id="remove-oath-form" action="http://localhost:3000/fellowships/${fellowship.id}" method="POST">
                    <input type="hidden" name="_method" value="DELETE" />
                    <input type="submit" value="Delete">
                    </form>`
                div.append(deleteButton)
            }
            document.querySelector('main').append(div)
        })
    })