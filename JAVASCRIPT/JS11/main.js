// const student ={
//     fullName: "Manu",
//     marks: 94.4,
//     printMarks: function(){
//         console.log("marks=", this.marks())
//     },
// };

// const employee = {
//     calcTax (){
//         console.log("Tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax (){
//         console.log("Tax rate is 20%");
//     },
// };

// karanArjun.__proto__ = employee;


// class toyotaCar {
//     constructor(brand, mileage) {
//         console.log("creating new object");
//         this.brandName = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     // setBrand(brand) {
//     //     this.brandName = brand;
//     // }
// }

// let fortuner = new toyotaCar("fortuner");
// console.log(fortuner);
// // fortuner.setBrand("fortuner");

// let lexus = new toyotaCar("lexus");
// console.log(lexus);
// // lexus.setBrand("lexus");


//Inheretence in JS

// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let object = new Child ();

// class Person {
//     eat (){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let ManuObj = new Engineer ();



//Practice qs 1

let Data = "Secret Information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData (){
        console.log("Data = ", Data);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
}

let student1 = new User("Manu", "manu@email.com");
let student2 = new User("Ankur", "ankur@email.com");

let teacher1 = new User("Dean", "dean@college.com");

let admin1 = new Admin("Admin", "admin@college.com");