export default class Cardholder {
    constructor(firstName = '',
                lastName = '',
                primaryBranch = '',
                cardNumber = undefined,
                books = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.primaryBranch = primaryBranch;
        this.cardNumber = cardNumber;
        this.books = books;
    }

    checkout(book, branch = this.primaryBranch) {
        if (branch) {
            branch.issueBookToCardholder(book, this);
            return console.log(`Success! You (${this.firstName} ${this.lastName}) checked out ${book.title} from ${branch.branchName} Library. Please return it in a timely fashion so that others may also enjoy it!`);
        }
    }

    checkin(book, branch) {
        if (branch) {
            branch.returnBookToLibrary(book, this);
            return console.log(`Success! You (${this.firstName} ${this.lastName}) checked in ${book.title} to ${branch.branchName} Library. It is now available to be checked out by other library users. Hope you enjoyed the reading!`);
        }
    }
}