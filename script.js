const titleOfBook = document.getElementById('bookTitle')
const authorOfBook = document.getElementById('bookAuthor')
const submitBook = document.getElementById('submitBook')
const bookLogs = document.getElementById('bookLogs')
const showMyBooks = document.getElementById('showMyBooks')

const myLibrary = [];

function Book(bookTitle, author, totalPages, yearPublished, haveCompleted) {
    this.bookTitle = bookTitle;
    this.author = author;
    this.totalPages = totalPages;
    this.yearPublished = yearPublished;
    this.haveCompleted - haveCompleted;
  }

  submitBook.addEventListener('click', function() {
    const title = titleOfBook.value;
    const author = authorOfBook.value;
    let bookAdded = new Book(title, author);
    myLibrary.push(bookAdded);
    titleOfBook.value = '';
    authorOfBook.value = '';
    while (bookLogs.firstChild) {
        bookLogs.removeChild(bookLogs.firstChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        const userInfoBox = document.createElement('div');
        userInfoBox.classList.add('bookDisplay')
        bookLogs.appendChild(userInfoBox);
        const userInfo = document.createElement('p')
        userInfo.textContent = `${myLibrary[i].bookTitle} by ${myLibrary[i].author}`;
        userInfoBox.appendChild(userInfo);
    }
  })
/*
  showMyBooks.addEventListener('click', function() {
    while (bookLogs.firstChild) {
        bookLogs.removeChild(bookLogs.firstChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        const userInfoBox = document.createElement('div');
        userInfoBox.classList.add('bookDisplay')
        bookLogs.appendChild(userInfoBox);
        const userInfo = document.createElement('p')
        userInfo.textContent = `${myLibrary[i].bookTitle} by ${myLibrary[i].author}`;
        userInfoBox.appendChild(userInfo);
    }
});
*/
