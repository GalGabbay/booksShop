'use strict'

const BOOK_DB = 'bookDB'
var gBooks
var gFilterBy = ''

_createBooks()

function getBooks() {

    if (gFilterBy === '') return gBooks

    return gBooks.filter(book => book.title.toLowerCase().includes(gFilterBy.toLowerCase()))

}



function removeBook(bookId) {
    const book = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(book, 1)
    _saveBooks()

}

function updatePrice(newPrice, bookId) {
    console.log(newPrice, bookId)
    const book = gBooks.find(book => book.id === bookId)
    book.price = newPrice
    _saveBooks()

}


function addBook(book, price) {

   const newBook = _createBook(book, price)
    gBooks.unshift(newBook)
    _saveBooks()
    
}


function readBook(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
}

function setFilterBy(text){
    gFilterBy = text

}








function _createBooks() {
    gBooks = loadFromStorage('bookDB')
    if (!gBooks) {

        gBooks = [

            _createBook('The Advetures of lori Ipsi', 120),
            _createBook('World Atlas', 300, 'img/atlas.jpg'),
            _createBook('Zorba the Greek', 87),
            _createBook('Sapianes', 99, 'img/sapians.jpg'),
        ]
    } _saveBooks()

}


function _createBook(title, price = getRandomInt(30, 150), url) {

    return {
        id: makeId(),
        title,
        price: price,
        imgUrl: url,

    }

}




function _saveBooks() {

    saveToStorage(BOOK_DB, gBooks)

}

















var gSortBy


function setSortBy() {

    gSortBy
}