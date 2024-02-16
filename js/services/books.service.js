
var gBooks

createBooks()

function getBooks() {
    return gBooks
}



function removeBook(bookId) {
    const book = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(book, 1)

}

function updatePrice(newPrice, bookId) {
    console.log(newPrice, bookId)
    const book = gBooks.find(book => book.id === bookId)
    book.price = newPrice

}












function createBooks() {

    gBooks = [

        createBook('book1'),
        createBook('book2'),
        createBook('book3'),
        createBook('book3'),
    ]

}


function createBook(title) {

    return {
        id: makeId(),
        title,
        price: getRandomInt(80, 120),

    }

}






















var gSortBy


function setSortBy() {

    gSortBy
}