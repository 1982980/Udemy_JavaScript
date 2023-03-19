"use strict";

const app = "123";

const number = 1;

//* создаем модуль с помощью самовызывающейся функции
(function(){
  let number = 2;
  console.log(number);
  console.log(number+3);
}());

console.log(number);

// создаем модуль с помощью "объектного интерфейса"
const user = (function(){
  const privat = function (){
    console.log("I'm privat function");
  }
  return {
    sayHello: privat
  };
}())
user.privat;
user;
