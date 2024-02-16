

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
    <td><button onclick="onRemoveBook('${book.id}')">Delete</button>
        <button onclick="onUpdateBook('${book.id}')">Update</button>
        <button>3</button></td>
    </tr>`
    )
    const elBooksList = document.querySelector('.books-list')
    elBooksList.innerHTML = strHtml + strHtmls.join('')

}


function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}


function onUpdateBook(bookId) {
    var newPrice = +prompt('Enter A New Price')
    updatePrice(newPrice, bookId)
    renderBooks()


}

























function onChangeSortBy() {

    setSortBy()
}