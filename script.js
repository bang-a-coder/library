const addButtons = document.querySelectorAll(`.upload-button`)
const libraryDaddy = document.querySelector(`.library-daddy`)

const formPopUp = document.querySelector(`.form-popup`)
const formCloseButton = document.querySelector(`#form-close-btn`)
const formUploadButton = document.querySelector(`#form-upload`)

const titleField = document.querySelector(`#title-input`)
const authorField = document.querySelector(`#author-input`)
const pagesField = document.querySelector(`#pages-input`)
const readField = document.querySelector(`.read-input`)

const deleteButton = document

addButtons.forEach(element => element.addEventListener(`click`, function () {   // Toggle Form
    (formPopUp.style.display === "none") ? formPopUp.style.display = "block" : formPopUp.style.display = "none";
}
))

formCloseButton.addEventListener(`click`, function () {                         // Toggle Form
    (formPopUp.style.display === "none") ? formPopUp.style.display = "block" : formPopUp.style.display = "none";
}
)


let library = []
let index = -1

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function createBookVisual(book){
    let frame = document.createElement(`div`)
        frame.classList.add(`book`)
        frame.dataset.index = index

    let ttl = document.createElement(`div`)
        ttl.classList.add(`book-title`)
        ttl.innerHTML += book.title
    
    let auth = document.createElement(`div`)
        auth.classList.add(`author`)
        auth.innerHTML += `by ` + book.author

    let pg = document.createElement(`div`)
        pg.classList.add(`pages`)
        pg.innerHTML += book.pages + ` pages`

    let rdStatus = document.createElement(`input`)
        rdStatus.classList.add(`readit`)
        rdStatus.id = `c2`
        rdStatus.type = `checkbox`
        rdStatus.checked = (book.read) ? true : false

    let rdStatusLabel = document.createElement(`label`)
        rdStatusLabel.htmlFor = `c2`
        rdStatusLabel.classList.add(`readit-label`)
        rdStatusLabel.innerHTML = `I have read it`

    frame.appendChild(ttl)
    frame.appendChild(auth)
    frame.appendChild(pg)
    frame.appendChild(rdStatus)
    frame.appendChild(rdStatusLabel)

    libraryDaddy.appendChild(frame)
}

function createNewBook() {
    let newBook = new Book(`${titleField.value}`, `${authorField.value}`, pagesField.value, readField.checked)
    return newBook
}

function addBookToLibrary(book) {
    index++
    library.push(book)
    createBookVisual(book)
}

formUploadButton.addEventListener(`click`, function(){
    addBookToLibrary(createNewBook())
    titleField.value = ''
    pagesField.value = ''
    authorField.value = ''
})