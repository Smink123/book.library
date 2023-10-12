const titleOfBook = document.getElementById("bookTitle");
const authorOfBook = document.getElementById("bookAuthor");
const numberOfPages = document.getElementById("bookPages");
const publishYear = document.getElementById("bookYear");
const submitBook = document.getElementById("submitBook");
const bookLogs = document.getElementById("bookLogs");
const totalBooks = document.getElementById('totalBooks')

const myLibrary = [];

function Book(bookTitle, author, totalPages, yearPublished, haveCompleted) {
  this.bookTitle = bookTitle;
  this.author = author;
  this.totalPages = totalPages;
  this.yearPublished = yearPublished;
}

submitBook.disabled = true;

function validForms() {
    if (
      titleOfBook.value !== "" &&
      authorOfBook.value !== "" &&
      numberOfPages.value !== "" &&
      publishYear.value !== ""
    ) {
      return (submitBook.disabled = false);
    }
  }

titleOfBook.addEventListener("input", validForms);
authorOfBook.addEventListener("input", validForms);
numberOfPages.addEventListener("input", validForms);
publishYear.addEventListener("input", validForms);

function displayBooks() {
  while (bookLogs.firstChild) {
    bookLogs.removeChild(bookLogs.firstChild);
  }
  myLibrary.forEach((book, i) => {
    const userInfoBox = document.createElement("div");
    userInfoBox.classList.add("bookDisplay");
    bookLogs.appendChild(userInfoBox);

    const userTitleAndAuthor = document.createElement("p");
    userTitleAndAuthor.textContent = `${book.bookTitle} by ${book.author}`;
    userInfoBox.appendChild(userTitleAndAuthor);

    const userPagesAndYear = document.createElement("p");
    userPagesAndYear.textContent = `${book.totalPages} pages, ${book.yearPublished}`;
    userInfoBox.appendChild(userPagesAndYear);

    const removeButton = document.createElement("button");
    removeButton.textContent = 'REMOVE';
    removeButton.classList.add('remove');
    userInfoBox.appendChild(removeButton);

    removeButton.addEventListener('click', function() {
        myLibrary.splice(i, 1);
        displayBooks();
    });
  });
  totalBooks.textContent = `Total Books: ${myLibrary.length}`;
}

submitBook.addEventListener("click", function () {
  const title = titleOfBook.value;
  const author = authorOfBook.value;
  const pages = numberOfPages.value;
  const year = publishYear.value;
  let bookAdded = new Book(title, author, pages, year);
  myLibrary.push(bookAdded);

  displayBooks();

  titleOfBook.value = "";
  authorOfBook.value = "";
  numberOfPages.value = "";
  publishYear.value = "";
  submitBook.disabled = true;
});








/*
  while (bookLogs.firstChild) {
    bookLogs.removeChild(bookLogs.firstChild);
  }
  for (let i = 0; i < myLibrary.length; i++) {
    const userInfoBox = document.createElement("div");
    userInfoBox.classList.add("bookDisplay");
    bookLogs.appendChild(userInfoBox);

    const userTitleAndAuthor = document.createElement("p");
    userTitleAndAuthor.textContent = `${myLibrary[i].bookTitle} by ${myLibrary[i].author}`;
    userInfoBox.appendChild(userTitleAndAuthor);

    const userPagesAndYear = document.createElement("p");
    userPagesAndYear.textContent = `${myLibrary[i].totalPages} pages, ${myLibrary[i].yearPublished}`;
    userInfoBox.appendChild(userPagesAndYear);

    const removeButton = document.createElement("button")
    removeButton.textContent = 'REMOVE'
    removeButton.classList.add('remove')
    userInfoBox.appendChild(removeButton);
  }
});

for (let i = 0; i < myLibrary.length; i++) {
    removeButton.addEventListener('click', function() {
        myLibrary.splice(myLibrary[i], 1)
        bookLogs.textContent = ''

        const userInfoBox = document.createElement("div");
    userInfoBox.classList.add("bookDisplay");
    bookLogs.appendChild(userInfoBox);

    const userTitleAndAuthor = document.createElement("p");
    userTitleAndAuthor.textContent = `${myLibrary[i].bookTitle} by ${myLibrary[i].author}`;
    userInfoBox.appendChild(userTitleAndAuthor);

    const userPagesAndYear = document.createElement("p");
    userPagesAndYear.textContent = `${myLibrary[i].totalPages} pages, ${myLibrary[i].yearPublished}`;
    userInfoBox.appendChild(userPagesAndYear);

    const removeButton = document.createElement("button")
    removeButton.textContent = 'REMOVE'
    removeButton.classList.add('remove')
    userInfoBox.appendChild(removeButton);
    })
}*/