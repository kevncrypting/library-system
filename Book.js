export default class Book {
    constructor(title = ``, 
                genre = ``, 
                author = ``, 
                hasBeenRead = false, 
                currentPage = 0, 
                totalNumberOfPages = 0) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.hasBeenRead = hasBeenRead;
        this.currentPage = currentPage;
        this.totalNumberOfPages = totalNumberOfPages;
    }

    // defines a method called readingSession within the Book class that accepts a number of pages and return the updated currentPage value
    readingSession(pages) {
        // if statement checks to see if the current reading session will increment the current page past the total number of pages
        if ((this.currentPage + pages) < this.totalNumberOfPages) {
            // if not, then it addes the pages read in the current reading session to the book's currentPage existing value
            this.currentPage += pages;
            // this is a message describing how many pages were read
            return `Nice reading session. You knocked out ${pages} pages of ${this.title}, and are currently on page ${this.currentPage} out of ${this.totalNumberOfPages}.`
            // if current reading session would increment the current page past the total, then it sets the currentPage value equal to the totalNumberOfPages, ...
        } else if ((this.currentPage + pages) >= this.totalNumberOfPages) {
            this.currentPage = this.totalNumberOfPages;
            // ...then changes the boolean hasBeenRead to true
            this.hasBeenRead = true;
            // and displays a completion of book message
            return `Another book in the... books! After reading ${pages} pages, you finally finished ${this.title}.`
        } else {
            // used to catch any other inputs
            return `Hmmm... I didn't understand your input.`
        }
    }
}