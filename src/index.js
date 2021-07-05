import bookCollection from './books.json'

import './style.scss'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('cards')
    const books = bookCollection.data
    
    books.forEach(book => {
        let cardDOM = buildCardDOM(book)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})

function buildCardDOM(book) {
    let photos = bookCollection.image_base_url

    return (
        `<div class="class">
            <a href="" class="book-photo">
                <img src="${photos.concat(`${book.ImageURL}`)}" alt="">
            </a>
            <div class="book-info">
                <div class="book-title">${book.Title}</div>
                <div class="book-Authors">${book.Authors}</div>
                <div class="book-format">${book.Format}</div>
            </div>
        </div>`
    )
}