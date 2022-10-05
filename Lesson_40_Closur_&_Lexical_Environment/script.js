"use strict";
// let number = 5;
// debugger;
// function logNumber() {
//   console.log(number);
//   debugger;
// }
// number = 6;
// logNumber();
// debugger;

// number = 8;
// logNumber();
// debugger;

function createCounter() {
  let counter = 0;
  const myFunc = function () {
    counter += 1;
    return counter;
    debugger;
  };
  return myFunc;
  debugger;
}

const increment = createCounter();
// console.log(increment);
// console.log(increment());
// console.log(createCounter());
debugger;
const c1 = increment();
debugger;
const c2 = increment();
debugger;
const c3 = increment();
debugger;
const c4 = increment();
debugger;

console.log(c1, c2, c3, c4);


// const a1 = createCounter();
// debugger;
// const a2 = createCounter();
// debugger;
// const a3 = createCounter();
// debugger;
// const a4 = createCounter();
// debugger;
// console.log(a1, a2, a3, a4);
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();

//

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

 console.log( counter() ); // 1
 console.log( counter() ); // 0

 console.log( counter2() ); // ?
 console.log( counter2() ); // ?
