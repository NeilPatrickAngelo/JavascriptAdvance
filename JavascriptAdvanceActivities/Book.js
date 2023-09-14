// Define an array of book objects
const library = [
    {
      title: "The Lord of the Rings",
      author: "John Ronald Reuel Tolkien",
      publishedYear: 1954,
    },
    {
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      publishedYear: 1605,
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      publishedYear: 1818,
    },
];
  
   
function displayBooks(books) {
    console.log("Library Books:");
    books.forEach(function (book, index) {
    console.log(`Book ${index + 1}:`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Published Year: ${book.publishedYear}`);
    console.log("----------------------------");
    });
}

const newBook = {
  title: "Rich Dad Poor Dad",
  author: "Robert Kiyosaki",
  publishedYear: 1997,
};

library.push(newBook);
displayBooks(library);
