const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  return data.filter(item=> item.amount > 0).reduce((acc, cur) => acc + cur.amount, 0);
};
// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  if(data.find(item => item.amount < 0)){
    return data.reduce((acc, cur) => acc + cur.amount, 0);
  } else {
    return getPositiveIncomeAmount(data);
  }
};

console.log(getTotalIncomeAmount(funds));


// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
function camelize(str){
  return str.split('-')
    .filter(item => item !== '')
    .map(item => item[0].toUpperCase() + item.slice(1))
    .join('');
}
console.log (camelize("background-color"));
console.log (camelize("list-style-image"));
console.log (camelize("-webkit-transition"));

//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива. Функция должна возвращать новый массив и не изменять исходный
function filterRange(arr, a, b){
  return arr.filter(item => item >= a && item <= b)
};

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)


//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать.
function filterRangeInPlace(arr, a, b){
  arr.forEach((element, index, arr) => {
    element >= a && element <= b ? element : arr.splice(index, 1);
  });
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]

// Сортировать в порядке убывания
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a)

console.log( arr ); // 8, 5, 2, 1, -10


//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.Создайте функцию copySorted(arr), которая будет возвращать такую копию.
function copySorted(arr){
  return arr.map(item => item).sort();
  //return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)


//Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора. Задание состоит из двух частей.
//Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
function Calculator(){
  this.method = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  },
  this.calculate = function(str){
    let strArr = str.split(' '),
    a = +strArr[0],
    b = +strArr[2],
    op = strArr[1];

    if(!this.method[op] || isNaN(a) || isNaN(b)){
      return NaN;
    }
    return this.method[op](a, b);
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 10") ); // 10

//У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

console.log( names ); // Вася, Петя, Маша


//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id. Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = /* ... ваш код ... */

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
