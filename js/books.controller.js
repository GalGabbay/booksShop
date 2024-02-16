

function onInit() {

    renderBooks()


}


function renderBooks() {

    const books = getBooks()
    const strHtml =
        `<tr>
    <th>Title</td>
    <th>price</td>
    <th>Actions</td>
    </tr >`

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
    const elBooksList = document.querySelector('.books-list')
    elBooksList.innerHTML = strHtml + strHtmls.join('')

}


function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}


function onUpdateBook(bookId, bookPrice) {
    var newPrice = +prompt('Enter A New Price', bookPrice)
    updatePrice(newPrice, bookId)
    renderBooks()
}

function onAddBook() {
    var bookTitle = prompt('Enter a title')
    var bookPrice = +prompt('Enter a price')
    addBook(bookTitle, bookPrice)
    renderBooks()

}

function onReadBook(ev, bookId) {
    ev.stopPropagation()
    var book = readBook(bookId)
    const elDialog = document.querySelector('.book-details')
    const elSpan = elDialog.querySelector('.book-details span')

    elSpan.innerText = JSON.stringify(book, null, 6)
    elImg = elDialog.querySelector('.book-details img')
    elDialog.showModal()
    elImg.src = book.imgUrl

}

























function onChangeSortBy() {

    setSortBy()
}