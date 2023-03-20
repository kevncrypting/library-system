export default class BookList {
    constructor(name = '', books = []) {
        this.name = name;
        this.books = books;
    }

    // creates a method called addBook that accepts a parameter called book
    addBook(book) { 
        // this.books is an array, so we can use the push method here to add the book that was passed into the method into the this.books array
        if (typeof book === `object`) {
            this.books.push(book);
        } else {
            return console.log(`Sorry, I did not understand your input. Please try something else!`);
        }
    }

    finishCurrentBook() {
        
    }
}