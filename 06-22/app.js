class book {
    constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    }
   \
}
    bookAge() {
        let today = new Date();
        return today.getFullYear() - this.year;
    }
}

let myBook = new book ('Invisible Man, Ralph Ellisonl, 1952')