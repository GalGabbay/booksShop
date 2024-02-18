'use strict'

var gSetTimeout 
function onInit() {

clearTimeout(gSetTimeout)
    renderBooks()
}



function renderBooks() {

    const books = getBooks()
    const elBooksContainer = document.querySelector('.books-content')

    if (!books.length) {
        elBooksContainer.innerHTML = `<tr>
                                            <td colspan="4">No matching books were found...</td>
                                      </tr>`
        return
    }

    const strHtmls = books.map(book =>

        `<tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td>
        <button onclick="onReadBook(event,'${book.id}')">Read</button>
        <button onclick="onUpdateBook('${book.id}', ${book.price})">Update</button>
        <button onclick="onRemoveBook('${book.id}')">Delete</button>
    </td>
    </tr>`
    )
    const elBooksList = document.querySelector('.books-list tbody')
    elBooksList.innerHTML = strHtmls.join('')

    renderStats()
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    successMessage('You have successfully deleted a book')
    renderBooks()
}

function onUpdateBook(bookId, bookPrice) {
    var newPrice = +prompt('Enter A New Price', bookPrice)
    updatePrice(newPrice, bookId)
    successMessage('You have successfully updated a book')
    renderBooks()

}

function onAddBook() {
    var bookTitle = prompt('Enter a title')
    var bookPrice = +prompt('Enter a price')
    if (!bookTitle || !bookPrice) return
    addBook(bookTitle, bookPrice)
    successMessage('You have successfully added a book')
    renderBooks()
}

function onReadBook(ev, bookId) {
    ev.stopPropagation()
    const book = readBook(bookId)
    const elDialog = document.querySelector('.book-details')
    const elSpan = elDialog.querySelector('span')

    elSpan.innerText = JSON.stringify(book, null, 6)
    const elImg = elDialog.querySelector('img')
    console.log(elImg)
    elImg.src = book.imgUrl
    // elImg.innerHTML = `<img src="${book.imgUrl}" alt="">`
    elDialog.showModal()
}

function onSetFilterBy(ev) {

    const text = document.querySelector('.filter-input').value
    console.log(text)

    setFilterBy(text)
    renderBooks()
}

function successMessage(text) {
    const elDialog = document.querySelector('.book-details')
    const elSpan = elDialog.querySelector('.book-details span')
    const elH2 = elDialog.querySelector('h2')
    console.log(elH2)
    elSpan.innerText = text

    elDialog.showModal()

   gSetTimeout = setTimeout(() => {
        elDialog.close()
      }, 2000)


}

function renderStats() {
    const elExpensive = document.querySelector('.expensive-books')
    const elAverage = document.querySelector('.average-books')
    const elCheap = document.querySelector('.cheap-books')
    
    elExpensive.innerText = getExpensiveBooks()
    elAverage.innerText = getAverageBooks()
    elCheap.innerText = getCheapBooks()
}


















function onChangeSortBy() {

    setSortBy()
}

// var gIsTable = 'table'



// function renderCards(){



//     const books = getBooks()
 

//     const strHtmls = books.map(book =>
//        ` <article class="item item${book.id}">${book.title} ${book.price}
//           <button onclick="onReadBook(event,'${book.id}')">Read</button>
//         <button onclick="onUpdateBook('${book.id}', ${book.price})">Update</button>
//         <button onclick="onRemoveBook('${book.id}')">Delete</button>
//         </article>`

 
//     )
//     const elBooksList = document.querySelector('.grid-container')
//     elBooksList.innerHTML = strHtmls.join('')

//     renderStats()



// }