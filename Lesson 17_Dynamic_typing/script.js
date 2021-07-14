"use strict";
//to String
//1
// console.log(typeof String(5));
//2
// console.log(typeof(5 + ""));

const num = 5;
console.log("http://hjhjhj/"+num);

const fontSize = 26 + "px";

// to Number
console.log(typeof(Number("4")));

console.log(typeof(+'56'));

console.log(parseInt('13px', 10));

let answ = +prompt("something","");

//to Boolean

// 0, '', null, undefined, NaN => false;
//1
let switcher = null;
if(switcher) {
  console.log('Working');
}

switcher = 1;
if(switcher) {
  console.log('Working');
}
//2
console.log(typeof(Boolean('4')));

//3
console.log(typeof(!!"34"));
