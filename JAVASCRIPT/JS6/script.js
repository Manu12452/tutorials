// console.log("hellow");
// alert("apna college");

// let button = document.getElementById("myId");
// console.dir(button);

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.dir(headings);


// let paragraphs = document.getElementsByTagName("p");
// console.dir(paragraphs);

// let firstEl = document.querySelector("p"); //first element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); //all elements
// console.dir(allEl);


// let firstEl = document.querySelector(".myClass");
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass");
// console.dir(allEl);


// let div = document.querySelector("div");
// console.dir(div);


// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from apna college students";



// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }



// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));



// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me !";
// console.log(newBtn);

// let div = document.querySelector("div");
// // div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);
// div.after(newBtn);



let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

//qs2

let para = document.querySelector("p");

