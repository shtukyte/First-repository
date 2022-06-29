class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
   getIndroduction () {
       return `${this.make} ${this.model}`
   }

   getAge () {
       const date = new Date();
       const result = this.year - date;
       if (result <= 10) {
        console.log(`${result} arba naujesnis`)
       }
        else {
         console.log(`${result} arba senesnis`)
       }
   }
}