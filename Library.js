export default class Library {
    constructor(branchName = '', lists = [], cardholders = []) {
        this.branchName = branchName;
        this.lists = lists;
        this.cardholders = cardholders;
    }

    intakeBookList(bookList) {
        if (typeof bookList === `object`) {
            this.lists.push(bookList);
        } else {
            return console.log(`Sorry, I did not understand your input. Please try something else!`);
        }
    }

    registerNewCardholder(cardholder) {
        this.cardholders.push(cardholder);
        cardholder.cardNumber = Math.floor(Math.random() * 1000000000);
    }

    issueBookToCardholder(book, cardholder) {
        // checks to see if book is available and if it is in the branch's collection
        if (book.isAvailable === true && this.branchName === book.currentHolder) { 
            // makes the book unavailable
            book.isAvailable = false; 
            // changes current holder to the cardholder
            book.currentHolder = `${cardholder.firstName} ${cardholder.lastName}`; 
            cardholder.books.push(book)
        } else if (book.isAvailable === false) {
            return console.log(`Sorry, that book is currently unavailable.`)
        }
    }

    returnBookToLibrary(book, cardholder) {
        book.isAvailable = true;
        book.currentHolder = this.branchName;
        const index = cardholder.books.indexOf(book); // assigns the variable index the indexOf the book
        cardholder.books.splice(index); // removes the book by its index value
    }

}