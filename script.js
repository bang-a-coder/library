const addButtons = document.querySelectorAll(`.upload-button`)
const libraryDaddy = document.querySelector(`.library-daddy`)

const formPopUp = document.querySelector(`.form-popup`)
const formCloseButton = document.querySelector(`.close-btn`)
const formUploadButton = document.querySelector(`#form-upload`)

const titleField = document.querySelector(`#title-input`)
const authorField = document.querySelector(`#author-input`)
const pagesField = document.querySelector(`#pages-input`)

addButtons.forEach(element => element.addEventListener(`click`, function () {   // Toggle Form
    console.log(`clicked`)
    if (formPopUp.style.display === "none") {
        formPopUp.style.display = "block";
    } else {
        formPopUp.style.display = "none";
    }
}
))

formCloseButton.addEventListener(`click`, function () {                         // Toggle Form
    console.log(`clicked`)
    if (formPopUp.style.display === "none" || formPopUp.style.display === "") {
        formPopUp.style.display = "block";
    } else {
        formPopUp.style.display = "none";
    }
}
)


let library = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function createBookVisual(book){
    let frame = document.createElement(`div`)
        frame.classList.add(`book`)

    let ttl = document.createElement(`div`)
        ttl.classList.add(`book-title`)
        ttl.innerHTML += book.title
    
    let auth = document.createElement(`div`)
        auth.classList.add(`author`)
        auth.innerHTML += `by ` + book.author

    let pg = document.createElement(`div`)
        pg.classList.add(`pages`)
        pg.innerHTML += book.pages + ` pages`
    
    frame.appendChild(ttl)
    frame.appendChild(auth)
    frame.appendChild(pg)

    libraryDaddy.appendChild(frame)
}

function createNewBook() {
    let newBook = new Book(`${titleField.value}`, `${authorField.value}`, pagesField.value)
    return newBook
}

function addBookToLibrary(book) {
    library.push(book)
    createBookVisual(book)
}

formUploadButton.addEventListener(`click`, function(){
    addBookToLibrary(createNewBook())
    titleField.value = ''
    pagesField.value = ''
    authorField.value = ''
})