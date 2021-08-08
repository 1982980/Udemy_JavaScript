"use strict";

//todo первый тип вызова функции
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);
//Обычная функция: this = window, но если 'use strict' => this = undefined

//todo второй тип вызова

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   },
// };
// obj.sum();

// контекст у методов объекта сам объект

//todo третий тип вызова функции
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// let ivan = new User('Ivan', 23);
// this в конструкторах и классах - это новый экземпляр объекта, который создается

//todo четвертый вариант вызова функции. Ручное присвоение контекста this (call, apply, bind)

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
// const user = {
//   name: "John",
// };
//.call(.., .., ..,) в call можно передать в контекст дополнительные данные через запятую
// sayName.call(user, "Smith");
//.apply(.., [.., ..,]) в apply можно передать в контекст доп данные в виде массива
// sayName.apply(user, ["Smith"]);
//.bind() не передает контекст в функцию, а создает из старой новую функцию с новым контекстом
// function count(num) {
//   return this * num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(23));

// const btn = document.querySelector('button');
//если использовать this в стрелочной функции то мы теряем контекст и this станет равен undefined
// btn.addEventListener('click', function(){
//   console.log(this);
// тут this = event.target и иногда также используется
// });
//в стрелочной функции нет своего контекста функции, она принимает контекст функции родителя
const obj = {
  num: 5,
  // контекст функции объекта => это сам объект
  sayNum: function () {
    const say = () => {
      //this вызовет контекст функции родителя sayNum, так как своего не имеет
      console.log(this.num);
    };
    say();
  },
};

obj.sayNum();
//другой синтаксис стрелочной функции
const double = a => a * 2;
