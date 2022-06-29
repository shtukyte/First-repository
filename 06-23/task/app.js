class Movie {
    constructor (name, year, director, budget, income){
        this.name = name;
        this.year = year;
        this.director = director;
        this.budget = budget;
        this.income = income;
    }
        getIntroduction() {
        return `${this.name}, ${this.year}, ${this.director}`
    }
        getProfit() {   
        return this.income - this.budget
    }       
}

let movie1 = new Movie ('Once Upon a Time in... Hollywood', 2019, 'Quentin Tarantino', 90000000, 374600000);
let movie2 = new Movie ('Shrek', 2001, 'Andrew Adamson', 60000000, 487900000);
console.log(movie1);
console.log(movie1.getIntroduction());
console.log(movie1.getProfit());
console.log(movie2);
console.log(movie2.getIntroduction());
console.log(movie2.getProfit());