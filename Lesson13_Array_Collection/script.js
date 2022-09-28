"use strict";

const arr = [1, 2, 3, 6, 8];
arr.pop(); //удалил последний элемент массива "8"
arr.push(10); //добавил в конец массива новый элемент "10"
arr.shift(); //удалил первый элемент массива
arr.unshift(9); //добавил в начало массива новый элемент "9"
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// console.log(arr.length); //индекс последнего элемента массива +1
arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

// const str = prompt("?", "");
// const product = str.split(", "); // мeтод который дел
// product.sort(); //метод сортировки, который сортирует как строку
// const productStr = product.join("; ");
// console.log(productStr);

const arrForSort = [2, 13, 26, 8, 10];
const a = "Bread Eve Chack Greg";
console.log(a.split(' '));
arrForSort.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}
console.log(arrForSort.sort(compareNum)); //чтобы метод сортировал числа по возрастанию, нужно
//использовать дополнительную функцию callback
