// var salary = "1000$";

//  (function () {
//      console.log("Original salary was " + salary);

//      var salary = "5000$";

//      console.log("My New Salary " + salary);
// })();

class Person {
    constructor() {
        this.name = '';
        this.age = 0;
    }

    sayName() {
        console.log("hello i am " + this.name)
    }
}


const Lucas = new Person()
Lucas.name = "Lucas"
Lucas.sayName();
console.log(Person)