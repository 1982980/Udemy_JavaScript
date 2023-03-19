"use strict";

// new RegExp = ('pattern', 'flags');

// /pattern/flags

// const ans = prompt("Введите ваше имя");

// const reg = /n/gi;
/* flags
  i - поиск в любом регистре
  g - поиск по всей строке, глобальный
  m - включает многострочный режим, поиск по строке во много строк и с переносом
  флаги можно комбинировать в любом порядке
*/

//! метод search возвращает индекс первого найденного элемента. флаг g нет смысла использовать из-за этого
// console.log(ans.search(reg));

//! метод match возвращает массив из паттерна, индекс первого найденного петтерна, строка, группа ['n', index: 1, input: 'Ann', groups: undefined], если стои флаг g, то массив из всех найденных паттернов
// console.log(ans.match(reg));

//! метод replace заменяет определенный элемент на указанный
// const pass = prompt("Password");
// console.log(pass.replace(/\./g, "*"));
// console.log("12-45-43".replace(/-/g, ":"));

//! метод test проверяет есть ли регулярное выражение в строке и возвращает true или false
// console.log(reg.test(ans));

//! классы в регулярных выражениях
/*
в регулярных выражениях есть классы, по которым можно проверять
 \d - класс цифры
 \w - класс слов
 \s - класс пробелов
*/
// const ans = prompt("Введите ваше имя");
// const reg = /\d/;
// console.log(ans.match(reg));

// const str = "My name is R2D2";
// console.log(str.match(/\w\d\w\d/i));

//! обратные классы, все что не соответствует неклассу
/*
  \D - не цифры
  \W - не буквы
  \S - не пробелы
*/
const str = "My name is R2D2";
console.log(str.match(/\D/gi));
