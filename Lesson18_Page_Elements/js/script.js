"use strict";
//by Id
const box = document.getElementById("box");
console.log(box);
// by tags
const btns = document.getElementsByTagName("button");
console.log(btns[1]);

//by class
const circles = document.getElementsByClassName("circle");
console.log(circles);

const hearts = document.querySelectorAll(".heart");
console.log(hearts);

hearts.forEach((item) => console.log(item));

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);
