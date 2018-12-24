//Book class: Represents a book
class Book {
  constructor(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  }
}

//Ui Class: Handles UI Tasks
class UI {
static displayBooks() {
  const StoredBooks = [
    {
      title: 'Book One',
      author: 'Jane Doe',
      isbn: '343434'
    },
    {
      title: 'Book One',
      author: 'Jane Doe',
      isbn: '343434'
    }
  ];
  const books = StoredBooks;
  books.forEach((book) => UI.addBookToList(book));
 }
 static addBookToList(book) {
      const list = document.querySelector("#book-list");

      const row = document.createElement("tr");

      row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;

      list.appendChild(row);
 }

 static clearFields() {
   document.querySelector('#title').value = '';
   document.querySelector('#author').value = '';
   document.querySelector('#isbn').value = '';
 }
}
//Store Class : Handles Storage

//Events: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Events: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const isbn = document.querySelector("#isbn").value;

//Instantiate book
const book = new Book(title, author, isbn);


//Add book to UI
UI.addBookToList(book);
});

//Clear Fields

//Events: Remove a Book