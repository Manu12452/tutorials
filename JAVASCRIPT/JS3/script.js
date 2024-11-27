// Print 1 to 5

// for(let i = 1; i <= 5; i++){
//     console.log("apna college");
// }

// console.log("loop has ended");

//Calculate sum of 1 to 5

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }

// console.log("sum = ", sum);
// console.log("loop has ended");


//Practice qs1

// for(let num = 0; num <= 100; num++){
//     if(num % 2 === 0){
//         console.log("num = ", num);
//     }
// }


//Practice qs2

// let gameNum = 25;
// let userNum = prompt("Guess the game number :");

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number guess again");
// }

// console.log("Congratulations you entered the right number");



//Strings

// let str = "apna college";
// let str2 = "krishna";

// console.log(str[8]);


//Template literals

// let specialString = `This is a template literal`;
// console.log(typeof specialString);


// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("The cost of", obj.item, "is", obj.price, "rupees");


//Escape character

// console.log("Apna\nCollege");

// let str = ("          Apna College Js       ");
// console.log(str.trim());



// Practice qs 

let fullName = prompt("enter your full name without space");
let username = "@" + fullName + fullName.length;

console.log(username);
