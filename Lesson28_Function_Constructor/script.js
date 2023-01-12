"use strict";

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// User.prototype.exit = function () {
//   console.log(`Пользователь ${this.name} ушел из чата`);
// };

// const ivan = new User("Ivan", 28);
// const alex = new User("Alex", 20);

// alex.hello();
// ivan.exit();

// console.log(ivan);
// console.log(alex);

function User(name, id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function(){
  console.log(`пользователь ${this.name} вышел из чата`);
};


const ivan = new User('Ivan', 23);
const alex = new User('Alex', 45);
// console.log(ivan, alex);
// alex.hello();
alex.exit();

//add task 1
const t = {};

function A() {
  return t;
}
function B() {
 return t;
}

let a = new A();
let b = new B();

console.log( a == b ); // true

// add task 2

function Accumulator(startingValue){
  this.value = startingValue;
  this.read = function(){
    this.value += +prompt('New number', 0);
  };
}
