"use strict";
const now = new Date("2020-05-01");
// new Date.parse('2020-05-01'); // делает тоже что и вариант выше

//TODO Методы Геттеры Getters -> мы что-то получаем

// console.log(now.getFullYear()); //год только 4-х значный
// console.log(now.getMonth()); //месяца начинаются с января -> [0]
// console.log(now.getDate()); //дни месяца начинаются с 1 по 31
// console.log(now.getDay()); //дни недели начинаются с воскресенья -> [0]
// console.log(now.getUTCHours()); //UTC - время по Гринвичу

// console.log(now.getTimezoneOffset()); //получаем разницу с Гринвичем
// console.log(now.getTime()); //получаем количество миллисекунд с timeStamp

//TODO Методы Сеттеры Setters -> мы что-то задаём

// console.log(now.setHours(7)); //в браузере и IDE будут разные значения. IDE берет время по Гринвичу(UTC), а браузер локальное время компа
// console.log(now.setHours(7, 43)); //в браузере и IDE будут разные значения. IDE берет время по Гринвичу(UTC), а браузер локальное время компа
// console.log(now);

let start = new Date();
for(let i = 0; i < 10000; i++) {
  let some = i ** 3;
}

let end = new Date();
alert(`Цикл сработал за ${end - start}`);
