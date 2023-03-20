import BookList from './BookList.js'; // imports the BookList class
import Book from './Book.js'; // imports the Book class
//import cardholder
//import library card

// creates two new reading lists based off the BookList class and assigns them each a name/reference
let summerReadingList = new BookList();
let winterReadingList = new BookList();

// console.log(summerReadingList);
// console.log(winterReadingList);

// creates two new books based off the Book class and assigns them each a name/reference, also passes in the specified arguments
let nativeSon = new Book("Native Son", "realness", "Richard Wright", false, 0, 311);
let artOfWar = new Book("The Art of War", "self-help", "Sun Tzu", false, 0, 99);
let theSecondArtOfWar = new Book("The Second Art of War", "self-help", "Sun Tzu", false, 0, 123);

// adds nativeSon to the winterReadingList
winterReadingList.addBook(nativeSon);

// adds artOfWar to the summerReadingList
summerReadingList.addBook(artOfWar);
summerReadingList.addBook(theSecondArtOfWar);

// checks the contents of the two book lists that were created earlier
console.log(summerReadingList);
console.log(winterReadingList);

winterReadingList.addBook(nativeSon);

summerReadingList.addBook(7);
console.log(summerReadingList);