const addButtons = document.querySelectorAll(`.upload-button`)
const libraryDaddy = document.querySelector(`.library-daddy`)
const formPopUp = document.querySelector(`.form-popup`)
const formCloseButton = document.querySelector(`#form-close-btn`)
const formUploadButton = document.querySelector(`#form-upload`)
const titleField = document.querySelector(`#title-input`)
const authorField = document.querySelector(`#author-input`)
const pagesField = document.querySelector(`#pages-input`)
const readField = document.querySelector(`.read-input`)

function toggleForm() {
    (formPopUp.style.display === "none") ? formPopUp.style.display = "block" : formPopUp.style.display = "none";
}

addButtons.forEach(element => element.addEventListener(`click`, toggleForm))
formCloseButton.addEventListener(`click`, toggleForm)
formUploadButton.addEventListener(`click`, execute)

let index = 0

class Biblioteque{
    constructor(){
        this.bookcase = []
    }

    add(book){
        this.bookcase.push(book)
        createBookVisual(book)
    }

    remove(idxVal) {
        this.bookcase = this.bookcase.filter(item => item.indexVal != idxVal)
        let ripDaddy = document.querySelector(`div[data-index="${idxVal}"]`);
        ripDaddy.parentElement.removeChild(ripDaddy)
    }
}

let libraryOfDreams = new Biblioteque

class Book {
    constructor(title, author, pages, read, indexVal){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.indexVal = indexVal
    }
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

    let dltButton = document.createElement(`div`)
        dltButton.classList.add(`close-btn`)
        dltButton.innerHTML = `&times;`
        dltButton.dataset.index = index
        dltButton.addEventListener(`click`, function(e){
            libraryOfDreams.remove((e.target.attributes[`data-index`].nodeValue))
        })  

    frame.appendChild(ttl)
    frame.appendChild(auth)
    frame.appendChild(pg)
    frame.appendChild(rdStatus)
    frame.appendChild(rdStatusLabel)
    frame.appendChild(dltButton)

    libraryDaddy.appendChild(frame)
}

function execute() {
    index++
    let newBook = new Book(`${titleField.value}`, `${authorField.value}`, pagesField.value, readField.checked, index)
    libraryOfDreams.add(newBook)
    titleField.value = pagesField.value = authorField.value = ''
}

window.addEventListener(`keydown`, function(e){
    console.log(typeof(e.key))
    if (e.key === `Enter`) { execute(), toggleForm()}
})