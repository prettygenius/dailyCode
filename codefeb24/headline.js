// Given is a text headline. Write this string in a h1 HTML tag and append it to the HTML body.


function printHeadline(headline) {
        let element = document.createElement('h1')
        element.textContent = headline
        document.body.appendChild(element)
    }