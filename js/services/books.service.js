
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


function addBook(book, price) {
 
    newBook = createBook(book, price)
gBooks.unshift(newBook)

}


function readBook(bookId) {
book = gBooks.find(book => book.id === bookId)
return book
}








function createBooks() {

    gBooks = [

        createBook('The Advetures of lori Ipsi', 120),
        createBook('World Atlas', 300, 'img/atlas.jpg'),
        createBook('Zorba the Greek', 87),
        createBook('Sapianes', 99),
    ]

}


function createBook(title, price = getRandomInt(30, 150), url) {

    return {
        id: makeId(),
        title,
        price: price,
        imgUrl: url,

    }

}






















var gSortBy


function setSortBy() {

    gSortBy
}