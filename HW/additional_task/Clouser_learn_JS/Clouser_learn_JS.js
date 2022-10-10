//? Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter. Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
/*
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1
*/
//* Ответ: счетчики не зависимые и второй счетчик вернет 0 и 1

//? Здесь объект счётчика создан с помощью функции-конструктора. Будет ли он работать? Что покажет?
/*
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}
*/
/*
let counter = new Counter();

console.log(counter.up()); //
console.log(counter.up()); // ?
console.log(counter.down()); // ?
*/
/*
 *Ответ: объект счётчика counter будет работать и внутренняя переменная count будет хранить все изменения с помощью замыкания
 *console.log( counter.up() );   => 1
 *console.log( counter.up() );   => 2
 *console.log( counter.down() ); => 1
 */

//? Посмотрите на код. Какой будет результат у вызова на последней строке?
/*
'use strict'
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();
*/
//* Ответ: вернет ошибку так как функция sayHi() не доступна из внешнего лексического окружения. Если не использовать 'use strict', то ошибки не будет, так как в нестрогом режиме функция будет доступна.

//? Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b. Да, именно таким образом, используя двойные круглые скобки (не опечатка).
/*
function sum ()(){

}
sum(1)(2) = 3
sum(5)(-1) = 4
*/

// Например:
/*
function add(a) {
  return function (b) {
    if (isNaN(b) === false) {
      return a+b;
    } else {
      return 'error';
    }
  };
}
console.log(add(4)(10));
*/
/*function createAddress(name){
  return function(address){
    return `${name} living in ${address}`;
  }
}
console.log(createAddress('Dan')('Kiev'));
*/
//пример
function extern() {
  const externVar = "Я - внешняя функция";

  function intern() {
    const internVar = "Я - внутрення функция";
    console.log("internalVar =>", internVar);
    console.log("externalVar =>", externVar);
  }
  return intern();
}
// const internFn = extern();
// internFn();
console.log(extern());

function createAddress(type) {
  const address = type.toUpperCase();
  return function (name) {
    return `${address} ${name}`;
  };
}

const addressGrazhdanin = createAddress("Гражданин");
const addressGrazhdanka = createAddress("Гражданка");
console.log(addressGrazhdanin("Василий"));
console.log(addressGrazhdanin("Елена"));

// function createPlayer(name){
//   let score = 0;
//   return function scoreCount(){
//     score++;
//     return console.log(`Player ${name}: score: ${score}`);
//   };
// }
// const counter1 = createPlayer('Jack');
// counter1();
// counter1();
// counter1();
// counter1();

// const playerTwo = createPlayer('Ann');
// playerTwo();
// playerTwo();
// playerTwo();
// counter1();
// playerTwo();
// console.log(counter1);

// написать функцию bind
// пример работы:
function logPerson() {
  return console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Mike", age: 22, job: "Frontend" };
const person2 = { name: "Helen", age: 32, job: "SMM" };
// logPerson(person1);

function bind(persone, fn) {
  return fn(persone);
}

// bind(person1, logPerson);
bind(person2) (logPerson(person1));

//TODO:
/*
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например:
*/
/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inArray(arr) {
  return function (x) {
    // for(let i of arr){
    //   console.log( i === x);
    // }
    //! don't work. return stop the function
    return arr.includes(x); //* working
  };
}

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
console.log(arr.filter(inArray([1, 2, 7]))); // 1,2
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

//TODO:
/*
У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, например вот таким?

users.sort(byField('name'));
users.sort(byField('age'));
То есть чтобы вместо функции мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого.
*/
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

//FIXME: users.sort((a, b) => a.name > b.name ? 1 : -1);

function byField(field) {
  return function (a, b) {
    // return a.field > b.field ? 1 : -1 //! не правильное обращение к свойству объекта
    return a[field] > b[field] ? 1 : -1; //* working
  };
}
console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));

//todo Следующий код создаёт массив из стрелков (shooters). Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так… Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.


function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      console.log( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
console.log(army);

//FIXME: text
//TODO: text
//*? text
//NOTE:
//* text
//*! text
//*TODO text
// Пример: text;

function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
     return 2;
  }
}

test();

var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());


var a = 10

function bar() {
  var a = 20

  function foo(){
    console.log(a)
  }

  foo()
}

bar()

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
