export default class LibraryCard {
    constructor(isActive = false, cardNumber = undefined, cardholder = ``, balance = 0) {
        this.isActive = isActive;
        this.cardNumber = cardNumber;
        this.cardholder = cardholder;
        this.balance = balance;
    }
}