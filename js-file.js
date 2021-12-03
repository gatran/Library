let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.entryNum = 1
}

// Used for the diplay button to display the current books in our library
function displayBooks() {
    const container = document.querySelector('#container');
    clearDisplay(container)
    for (var i = 0; i < myLibrary.length; i++) {
        const container = document.querySelector('#container')
        const content = document.createElement('div')
        content.classList.add('card')
        content.textContent = myLibrary[i].entryNum + ') '
        content.textContent += myLibrary[i].title + ', '
        content.textContent += myLibrary[i].author + ', '
        content.textContent += myLibrary[i].pages + ', '
        content.textContent += myLibrary[i].read
        container.appendChild(content)
    }
    return
}

// Helper function to update the book entries of the library
function updateEntry() {
    for (var i = 0; i < myLibrary.length; i++) {
         if (myLibrary[i].entryNum != i+1) {
             myLibrary[i].entryNum = i+1
        }
    }
}

// Adds a book into the library based off four user given inputs
function addBook(title, author, pages, read) {
    let input1 = prompt("Add a title", "Ex: The Hobbit")
    let input2 = prompt("Add a author", "Ex: J.R.R Tolkien")
    let input3 = prompt("Add a pages", "Ex. 295 pages")
    let input4 = prompt("Add a read", "Ex. read / not read yet")
    myLibrary.push(new Book(input1, input2, input3, input4))
    const container = document.querySelector('#container');
    clearDisplay(container)
    updateEntry()
    displayBooks()
}

// Deletes a book from the library based off the given user inputted index
function deleteBook() {
    let input = prompt("Which book entry would you like to remove?", "Ex. 1")
    myLibrary.splice(input - 1, 1)
    const container = document.querySelector('#container');
    clearDisplay(container)
    updateEntry()
    displayBooks()
}

// Used to clear the previous display by removing all of the children in the container
function clearDisplay(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Dummy books
const theHobbit = myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet"))
const harryPotter1 = myLibrary.push(new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "223 pages", "not read yet"))
const harryPotter2 = myLibrary.push(new Book("Harry Potter and the Chamber of Secrets", "J. K. Rowling", "251 pages", "not read yet"))
const harryPotter3 = myLibrary.push(new Book("Harry Potter and the Prisoner of Azkaban", "J. K. Rowling", "317 pages", "not read yet"))
updateEntry()