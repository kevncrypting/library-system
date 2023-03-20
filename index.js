// imports the BookList class
import BookList from './BookList.js'; 
// imports the Book class
import Book from './Book.js'; 
// imports the Cardholder class
import Cardholder from './Cardholder.js'; 
// imports the LibraryCard class
// import LibraryCard from '.LibraryCard.js';
// imports the Library class
import Library from './Library.js';

// creates a new library called mainBranch based off the Library class, and assigns it the name "Main Branch"
let mainBranch = new Library("Main Branch");

// creates two new booklists called staffPicks and programmingBooks based off the BookList class, and assigns them the names "Staff Picks" and "Programming Books" respectively
let staffPicks = new BookList("Staff Picks");
let programmingBooks = new BookList("Programming Books");

// creates two new books based off the Book class and assigns them each a name/reference, also passes in the specified arguments
let nativeSon = new Book("Native Son", "realness", ["Richard Wright"], true, 'Main Branch', 0, 311);
let artOfWar = new Book("The Art of War", "self-help", ["Sun Tzu"], true, 'Main Branch', 0, 99);

// creates two new books based off the Book class and assigns them each a title, genre, author(s), etc...
let cleanCode = new Book("Clean Code: A Handbook of Agile Software Craftsmanship", "educational", ["Robert Martin"], true, 'Main Branch', 0, 464);
let thePragmaticProgrammer = new Book("The Pragmatic Programmer", "educational", ["Andrew Hunt", "David Thomas"], true, 'Main Branch', 0, 352)

let kevinPrachith = new Cardholder("Kevin", "Prachith", mainBranch);

// adds two books to the staffPicks BookList
staffPicks.addBook(nativeSon);
staffPicks.addBook(artOfWar);

// adds two books to the programmingBooks BookList
programmingBooks.addBook(cleanCode);
programmingBooks.addBook(thePragmaticProgrammer);

// adds two BookLists to the mainBranch Library
mainBranch.intakeBookList(staffPicks);
mainBranch.intakeBookList(programmingBooks);

// checks the contents of the two book lists that were created earlier
// console.log(staffPicks);
// console.log(programmingBooks);

console.log(programmingBooks);

// NEW METHOD ALERT - should change isAvailable on book to false, then add book to Cardholder books
kevinPrachith.checkout(cleanCode);

mainBranch.registerNewCardholder(kevinPrachith);

console.log(programmingBooks);

console.log(kevinPrachith);

// NEW METHOD ALERT - should change isAvailable on book to true, then remove from Cardholder books
// kevinPrachith.checkin(cleanCode, mainBranch);

// console.log(kevinPrachith.books);

// tests error message in addBook method, should accepts only inputs of type object
// staffPicks.addBook(7);