//Arithmetic Operators

// let a = 5;
// let b = 2;

// console.log("a =", a , "& b =", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

//Unary Operators

// let a = 5;
// let b = 2;

// console.log("a =", a , "& b =", b);
// a++;           Post increment
// console.log("a = ", a);


// let a = 5;
// let b = 2;

// console.log("a =", a , "& b =", b);
// a--;           Post decrement
// console.log("a = ", a);


// Assignment Operator

// let a = 5;
// let b = 2;

// a += 4;  //a = a+4
// console.log("a = ", a);

// a -= 4;  //a = a-4
// console.log("a = ", a);

// a *= 4;  //a = a*4
// console.log("a = ", a);

// a %= 4;  //a = a%4
// console.log("a = ", a);

// a **= 4;  //a = a**4
// console.log("a = ", a);


// Comparison Operator

// let a = 5;
// let b = 2;

// console.log("a == b", a == b);

// console.log("a === b", a === b);

// console.log("a != b", a != b);

// console.log("a !== b", a !== b);

// console.log("a > b", a > b);

// console.log("a >= b", a >= b);

// console.log("a < b", a < b);

// console.log("a <= b", a <= b);


// Logical Operator

// let a = 6;
// let b = 5;

// console.log("cond1 && cond2", a > b && a ===6);

// console.log("cond1 || cond2", a > b || a ===6);

// console.log("!(6<5) = ", !(a<b));


//Conditional Statement

// let age = 25;
// if(age >= 18){
//     console.log("You can vote");
// }

// if(age < 18){
//     console.log("You can not vote");
// }




// let mode = "light";
// let color;

// if(mode === "dark-mode"){
//     color = "black";
// }
// else{
//     color = "white";
// }

// console.log(color);


// let age = 18;
// if(age >= 18){
//     console.log("vote");
// }
// else{
//     console.log("not vote");
// }


// odd or even

// let num = 10;
// if(num % 2 === 0){
//     console.log(num,"is even");
// }
// else{
//     console.log(num,"is odd");
// }



// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }

// else if(mode === "blue"){
//     color = "blue";
// }

// else if(mode === "pink"){
//     color = "pink";
// }

// else{
//     color = "white";
// }

// console.log(color);


//Ternary operator

// let age = 25;
// let result = age >= 18? "adult" : "not adult";
// console.log(result);



//practice qs 1:-

// let num = prompt("Enter a number");
// if (num % 5 === 0){
//     console.log(num, "is a multiple of 5");
// }
// else{
//     console.log(num, "is not a multiple of 5");
// }


//practice qs 2:-

let score = 70;
let grade;

if (score >= 90 && score <= 100){
    grade = "A";
}
else if (score >= 70 && score <= 89){
    grade = "B";
}
else if (score >= 60 && score <= 69){
    grade = "C";
}
else if (score >= 50 && score <= 59){
    grade = "D";
}
else if (score >= 0 && score <= 49){
    grade = "F";
}

console.log("according to your score, your grade was :", grade);