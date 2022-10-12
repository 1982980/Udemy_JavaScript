"use strict";

//by Id
const box = document.getElementById("box");
console.log(box);

// by tags
const btns = document.getElementsByTagName("button");
console.log(btns);

//by class name
const circles = document.getElementsByClassName("circle");
console.log(circles);

//by CSS-selector. Собирает все элементы по CSS селектору в  
const hearts = document.querySelectorAll(".heart");
hearts.forEach((item) => console.log(item));

// by CSS-selector. получает первый элемент на странице по селектору
const oneHeart = document.querySelector(".heart");
console.log(oneHeart);
