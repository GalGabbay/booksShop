
var gBooks

createBooks()

function getBooks(){
return gBooks
}



function removeBook(bookId) {
    console.log(bookId)
const book = gBooks.findIndex(book =>  book.id === bookId)
    console.log(book)
    gBooks.splice(book, 1)

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