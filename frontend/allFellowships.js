fetch("http://localhost:3000/fellowships")
    .then(response => response.json())
    .then(fellowships => {
        fellowships.forEach(fellowship => {
            const div = document.createElement('div')
            div.innerHTML = `
            <h3>${fellowship.name}</h3>
            `
            document.querySelector('main').append(div)
        })
    })