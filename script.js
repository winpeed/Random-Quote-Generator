let textBored = document.querySelector('.bored-text')

let btnChange = document.querySelector('.change-button')

let btnClear = document.querySelector('.clear-button')

let textAuthor = document.querySelector('.author-text')

let clearBtn = document.getElementById('clear-btn')


btnChange.addEventListener('click', function() {

    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            textBored.textContent = data.quotes[0].text
            textBored.style.border = '2px solid #79db75'
            textAuthor.textContent = ` Written by: ${data.quotes[0].author}`
            clearBtn.style.display = 'block'


        })
})



btnClear.addEventListener('click', function() {

        textBored.textContent = ''
        textAuthor.textContent = ''
        clearBtn.style.display = 'none'
        textBored.style.border = 'none'

})