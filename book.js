// สร้าง Book class จากไฟล์ book.js
class Book {
  constructor(title, author, price, imageUrl) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  render() {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", this.imageUrl);
    bookElement.appendChild(imageElement);

    const titleElement = document.createElement("div");
    titleElement.classList.add("book-title");
    titleElement.textContent = this.title;
    bookElement.appendChild(titleElement);

    const authorElement = document.createElement("div");
    authorElement.classList.add("book-author");
    authorElement.textContent = this.author;
    bookElement.appendChild(authorElement);

    const priceElement = document.createElement("div");
    priceElement.classList.add("book-price");
    priceElement.textContent = `$${this.price}`;
    bookElement.appendChild(priceElement);

    return bookElement;
  }
}

// สร้างตัวแปร books เก็บข้อมูลหนังสือ
const books = [
  // เพิ่มข้อมูลหนังสือต่อไปนี้ตามต้องการ
  new Book(
    "The Catcher in the Rye",
    "J.D. Salinger",
    8.99,
    "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg"
  ),
  new Book(
    "To Kill a Mockingbird",
    "Harper Lee",
    9.99,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
  ),
  new Book(
    "1984",
    "George Orwell",
    7.99,
    "https://m.media-amazon.com/images/I/81StSOpmkjL.jpg"
  ),
  new Book(
    "Animal Farm",
    "George Orwell",
    6.99,
    "https://m.media-amazon.com/images/I/91LUbAcpACL.jpg"
  ),
  new Book(
    "Pride and Prejudice",
    "Jane Austen",
    5.99,
    "https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg"
  ),
  new Book(
    "Sense and Sensibility",
    "Jane Austen",
    6.99,
    "https://m.media-amazon.com/images/I/81Vxq4Qu19L._AC_UF1000,1000_QL80_.jpg"
  ),
  new Book(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
     7.99,
    "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg"
  ),
  new Book(
    "The Adventures of Huckleberry Finn",
    "Mark Twain",
    8.99,
    "https://upload.wikimedia.org/wikipedia/commons/6/61/Huckleberry_Finn_book.JPG"
  ),
  new Book(
    "The Adventures of Tom Sawyer",
    "Mark Twain",
    7.99,
    "https://m.media-amazon.com/images/I/71l6aEDzaFS._AC_UF1000,1000_QL80_.jpg"
  ),

  
];

// ตรวจสอบว่าชื่อหนังสือและผู้เขียนซ้ำกับข้อมูลที่มีอยู่แล้วหรือไม่
//for (let i = 0; i < newBooks.length; i++) {
//  const newBook = newBooks[i];
//  const isDuplicate = books.some(book => book.title === newBook.title && book.author === newBook.author);
//  if (isDuplicate) {
//    console.log(`"${newBook.title}" by ${newBook.author} is a duplicate book and will not be added.`);
//  } else {
//    books.push(newBook);
//  }
//}

// แสดงผลหนังสือทั้งหมดในหน้าเว็บ
const booksContainer = document.getElementById("books-container");

books.forEach(book => {
  booksContainer.appendChild(book.render());
});
