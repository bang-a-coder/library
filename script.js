
let library = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function () {
    return `The ${this.title} by ${this.author} is ${this.pages} long and I ${(this.read === true) ? 'have read it.' : "haven't read it yet."}`
}


function addBookToLibrary(book) {
    library.push(book)
}

