// let marks = [97,82,64,74,32];
// console.log(marks);
// console.log(marks.length); //Property


// let heroes = ["Spiderman","Antman","Superman","Batman","Hanuman","Ironman"];
// console.log(heroes);
// console.log(heroes.length);


// let heroes = ["Spiderman","Antman","Superman","Batman","Hanuman","Ironman"];

// for loop

// for(let idx = 0; idx < heroes.length; idx++){
//     console.log(heroes[idx]);
// }

//for of loop

// for(let hero of heroes){
//     console.log(hero);
// }

// let cities = ["mumbai", "delhi", "pune", "gurgaon", "noida"]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }



//Practice qs 1

// let marks = [85,97,44,37,76,60]

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

//Practice qs 2

let items = [250,645,300,900,50]


// let i = 0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
// }


// for(let i = 0; i < items.length; i++){
//     let offers = items[i]/10;
//     items[i] -= offers;
// }

// console.log(items);


//Array Methods

// let foodItems = ["potato", "apple", "litchi", "tomato"];

// foodItems.push("chips", "burger", "paneer");

// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem);


// console.log(foodItems);
// console.log(foodItems.toString());



// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes =["shaktiman", "krish"];
// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("spiderman");

// let deletedHero = marvelHeroes.shift();
// console.log(marvelHeroes);
// console.log("deleted", deletedHero);


// let marvelHeroes = ["thor", "spiderman", "ironman", "shaktiman", "krish"];

// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1,3));



// let arr = [1,2,3,4,5,6,7];

// arr.splice(2,2,101,102);

//Add element
// arr.splice(2,0,101);

//Delete element
// arr.splice(3,1);

//Replace element
// arr.splice(3,1,101);



//Practice qs

let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
// companies.shift();

// companies.splice(2,1,"ola");

companies.push("amazon");