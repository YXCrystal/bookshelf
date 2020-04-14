
let myLibrary = [
    {title: "IT", author: "Stephen King", pages: 1138},
    {title: "The Shining", author: "Stephen King", pages: 688},
    {title: "Pet Sematary", author: "Stephen King", pages: 416},
    {title: "The Outsider", author: "Stephen King", pages: 560}
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let submit = document.getElementById("submit");

    submit.addEventListener("click", function() {
        let book = new Book(title.value, author.value, pages.value);
        myLibrary.push(book);
        title.value = "";
        author.value = "";
        pages.value = "";
        addBook(book, myLibrary.length - 1);
    })
}

function LibrarySetup() {
    let i = 0
    let form = document.getElementById('form');

    form.addEventListener("submit", function(event) {
            event.preventDefault();
    });

    myLibrary.forEach(function(novel) {
         addBook(novel, i);
         i++;
    });

    addBookToLibrary();
}

function addBook(novel, id) {
    let library = document.querySelector(".library");
    let book = document.createElement("div");
        book.classList.add("col-md-3");
        book.setAttribute("id", `book${id}`)
        book.innerHTML =
        `<div class="card">
            <div class="card-body">
                <h2 class="card-title"> ${novel.title} </h2>
                <hr>
                <p class="card-text"> <strong>Author:</strong> ${novel.author} </p>
                <p class="card-text"> <strong>Pages:</strong> ${novel.pages} </p>
                <div id="read${id}" class="btn_library read">Read</div>
                <div id="delete${id}" class="btn_library delete">Delete</div>
            </div>
        </div>`
    library.appendChild(book);
    readBook(id);
    deleteBook(id);
}

function readBook(id) {
    let book = document.getElementById(`read${id}`);
    book.addEventListener("click", (function() {
        styling(id);
    }));

}

function styling(id) {
    let bookBtn = document.getElementById(`read${id}`);
    let book = document.getElementById(`book${id}`);
    if (bookBtn.textContent == "Read") {
        bookBtn.textContent = "Unread";
    } else {
        bookBtn.textContent = "Read";
    }
    book.classList.toggle("complete");
}

function deleteBook(id) {
    let bookBtn = document.getElementById(`delete${id}`)
    let book = document.getElementById(`book${id}`);
    bookBtn.addEventListener("click", (() => book.remove()));
}

LibrarySetup();
