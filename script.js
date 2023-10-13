const titleOfBook = document.getElementById("bookTitle");
const authorOfBook = document.getElementById("bookAuthor");
const numberOfPages = document.getElementById("bookPages");
const publishYear = document.getElementById("bookYear");
const submitBook = document.getElementById("submitBook");
const bookLogs = document.getElementById("bookLogs");
const totalBooks = document.getElementById('totalBooks')

const myLibrary = [];

function Book(bookTitle, author, totalPages, yearPublished, notRead) {
    this.bookTitle = bookTitle;
    this.author = author;
    this.totalPages = totalPages;
    this.yearPublished = yearPublished;
    this.notRead = notRead || false;
  }

submitBook.disabled = true;
submitBook.style.cursor = 'not-allowed';

function validForms() {
    if (
      titleOfBook.value !== "" &&
      authorOfBook.value !== "" &&
      numberOfPages.value !== "" &&
      publishYear.value !== ""
    ) {
      submitBook.disabled = false;
      submitBook.style.cursor = 'pointer'
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

      const bookInfoSide = document.createElement("div");
      bookInfoSide.classList.add('bookInfoSide');
      userInfoBox.appendChild(bookInfoSide)
  
      const userTitle = document.createElement("p");
      userTitle.textContent = `${book.bookTitle}`;
      userTitle.classList.add('userTitle');
      bookInfoSide.appendChild(userTitle);

      const userAuthorAndYear = document.createElement("p")
      userAuthorAndYear.textContent = `${book.author}, ${book.yearPublished}`;
      userAuthorAndYear.classList.add('userExtraInfo')
      bookInfoSide.appendChild(userAuthorAndYear);
  
      const userPages = document.createElement("p");
      userPages.textContent = `${book.totalPages} pages`;
      userPages.classList.add('userExtraInfo')
      bookInfoSide.appendChild(userPages);

      const buttonSide = document.createElement("div");
      buttonSide.classList.add('buttonSide');
      userInfoBox.appendChild(buttonSide)
  
      const removeButton = document.createElement("button");
      removeButton.textContent = 'REMOVE';
      removeButton.classList.add('remove');
      buttonSide.appendChild(removeButton);
  
      removeButton.addEventListener('click', function() {
        myLibrary.splice(i, 1);
        displayBooks();
      });
  
      const statusBox = document.createElement("div");
      statusBox.classList.add('statusBox');
      buttonSide.appendChild(statusBox);
  
      const haveRead = document.createElement("button");
      haveRead.classList.add('statusButtons');
      haveRead.textContent = 'NOT READ';
      statusBox.appendChild(haveRead);
  
      const notRead = document.createElement("button");
      notRead.classList.add('statusButtons');
      notRead.textContent = 'HAVE READ';
      statusBox.appendChild(notRead);
  
      if (book.notRead) { // the automatic state of the buttons/selection. haveRead starts off as 'true'
        notRead.style.backgroundColor = 'black';
        notRead.style.color = 'white';
        haveRead.style.backgroundColor = 'white';
        haveRead.style.color = 'black';
      } else {
        haveRead.style.backgroundColor = 'black';
        haveRead.style.color = 'white';
        notRead.style.backgroundColor = 'white';
        notRead.style.color = 'black';
      }
  
      haveRead.addEventListener('click', function() {
        book.notRead = false; //change the state to it has been read
        haveRead.style.backgroundColor = 'black';
        haveRead.style.color = 'white';
        notRead.style.backgroundColor = 'white';
        notRead.style.color = 'black';
      });
  
      notRead.addEventListener('click', function() {
        book.notRead = true;
        notRead.style.backgroundColor = 'black';
        notRead.style.color = 'white';
        haveRead.style.backgroundColor = 'white';
        haveRead.style.color = 'black';
      });
    });
    totalBooks.textContent = `TOTAL BOOKS: ${myLibrary.length}`;
  }
  

submitBook.addEventListener("click", function () {
  const title = titleOfBook.value;
  const author = authorOfBook.value;
  const pages = numberOfPages.value;
  const year = publishYear.value;
  let haveRead = false;
  let bookAdded = new Book(title, author, pages, year, haveRead);
  myLibrary.push(bookAdded);

  displayBooks();

  titleOfBook.value = "";
  authorOfBook.value = "";
  numberOfPages.value = "";
  publishYear.value = "";
  submitBook.disabled = true;
  submitBook.style.cursor = 'not-allowed';
});