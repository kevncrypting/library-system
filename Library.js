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

//issue book method

}