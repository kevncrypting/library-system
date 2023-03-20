export default class Cardholder {
    constructor(firstName = '', lastName = '', primaryBranch = '', cardNumber = 0, books = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.primaryBranch = primaryBranch;
        this.cardNumber = cardNumber;
        this.books = books;
    }

    // should add the book to the books array, then remove book from branch
    checkoutBook(book) {
        if (book.isAvailable === true) {
            this.books.push(book);
            book.isAvailable = false;
            book.currentHolder = this.lastName;
            return console.log(`Success! You (${this.firstName} ${this.lastName}) checked out ${book.title}. Please return it in a timely fashion so that others may also enjoy it!`)
        } else if (book.isAvailable === false) {
            return console.log(`Sorry, that book is currently unavailable.`)
        }
    }

    checkinBook(book) {
        if (book.isAvailable === false) {
            const index = this.books.indexOf(book); // assigns the variable index the indexOf the book
            this.books.splice(index); // removes the book by its index value
            book.isAvailable = true; // changes book availability to true
            book.currentHolder = `library`; // changes current holder back to library
            return console.log(`Success! You (${this.firstName} ${this.lastName}) checked in ${book.title}. It is now available to be checked out by other library users. Hope you enjoyed the reading!`)
        } 
    }
}