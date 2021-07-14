"use strict";
// let str = 'some';
// let strObj = new String(str);

// console.log(str);
// console.log(strObj);

// console.dir([1,2,3])

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

// const John = {
//   health: 100,
// };

// John.__proto__ = soldier;
// Object.setPrototypeOf(John, soldier);
const John = Object.create(soldier);
console.log(John.sayHello());
