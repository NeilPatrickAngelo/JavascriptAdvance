// Define an array of book objects
const library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
  },
];

 

// Function to display information about each book
function displayBooks(books) {
  console.log("Library Books:");
  books.forEach(function (book, index) {
    console.log(`Book ${index + 1}:`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Published Year: ${book.publishedYear}`);
    console.log("--------------");
  });
}

 

// Add a new book to the library
const newBook = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  publishedYear: 1951,
};

 

library.push(newBook);

 

// Display the library books after adding a new book
displayBooks(library);

 

// Find and display books published before a specific year
const yearToFilter = 1960;
const filteredBooks = library.filter(function (book) {
  return book.publishedYear < yearToFilter;
});

 

console.log(`Books published before ${yearToFilter}:`);
displayBooks(filteredBooks);