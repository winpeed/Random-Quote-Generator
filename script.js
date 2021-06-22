let textBored = document.querySelector('.bored-text')

let btnChange = document.querySelector('.change-button')

let textAuthor = document.querySelector('.author-text')


btnChange.addEventListener('click', function() {

    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            textBored.textContent = data.quotes[0].text
            textAuthor.textContent = ` Written by: ${data.quotes[0].author}`
        })
})