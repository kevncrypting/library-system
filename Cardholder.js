export default class Cardholder {
    constructor(firstName = '', lastName = '', primaryBranch = '', cardNumber = 0, books = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.primaryBranch = primaryBranch;
        this.cardNumber = cardNumber;
        this.books = books;
    }


}