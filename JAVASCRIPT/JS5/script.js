// function myFunction(){
//     console.log("welcome to apna college");
//     console.log("we are learning js");
// }

// myFunction();



// function myFunction(msg){
//     //Parameter -> input
//     console.log(msg);
// }

// myFunction("I love JS"); //Argument



//Function -> 2 numbers sum

// function sum(x,y){
//     s = x+y;
//     return s;
// }

// let val = sum(3,4);
// console.log(val);



//Arrow function------>

//sum function
// function sum(){
//     return a + b;
// }

// const arrowSum = (a,b)=>{
//     console.log(a+b);
// }


//multiplication function
// function multiplication(){
//     return a * b;
// }

// const arrowMultiplication = (a,b)=>{
//     console.log(a*b);
// }




//Practice qs

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++ ;
//         }
//     }
//     return count;
// }

// const countVow = (str)=>{
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++ ;
//         }
//     }
//     return count;
// }



//forEach loop in arrays------->

// let arr = ["pune", "delhi", "mumbai", "gurgaon", "noida"]

// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase, idx, arr);
// });


//Practice qs

// let nums = [1,2,3,4,5,6];

// nums.forEach((num) => {
//     console.log(num * num);
// });




//Some more array methods

// let nums = [11,22,33,44,55];
//  nums.map((val) => {
//     console.log(val);
//  });



// let arr = [1,2,3,4,5,6,7,8];
//  let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
//  });

//  console.log(evenArr);



// let arr = [1,2,3,4];

// const output = arr.reduce((res, curr)=>{
//     return res + curr;
// });

// console.log(output);



// let arr = [4,9,5,8];

// const output = arr.reduce((res, curr)=>{
//     return res > curr ? res : curr;
// });

// console.log(output);




//Practice qs

// let marks = [99,97,32,45,68,95,96];

// let toppers = marks.filter((val)=>{
//     return val > 90;
// });

// console.log(toppers);




// practice qs

let n = prompt("enter a number: ");

let arr = [];

for (let i=1; i<=n; i++){
    arr[i-1]=i;
}

console.log(arr);

let sum = arr.reduce((res, curr)=>{
    return res+curr;
});

console.log("sum = ",sum);

let factorial = arr.reduce((res, curr)=>{
    return res*curr;
});
console.log("factorial = ", factorial);