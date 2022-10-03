"use strict";
// to Strict
// 1. 'String' встроенный оператор, с помощью которого можно любой примитив преобразовать в строку. устаревший метод
console.log(typeof String(5)); // => 'string'
console.log(String(null)); // => 'null'
console.log(String(undefined)); //=> 'undefined'

//2. Метод конкатенации. При сложении со строкой любого примитива в результате будет строчный ответ, после объединения
console.log(5 + ""); // => "5"
const num = 5;
console.log("http://hjhjhj/"+num);

const fontSize = 26 + "px";
//to Number
// 3. Number - встроенная оператор, для перевода примитивных данных в цифровой тип данных. Используется очень редко
console.log(typeof(Number("4")));
// 4. унарный плюс, который ставится перед примитивом, переводит в числовой тип данных
console.log(typeof(+'56'));
let answ = +prompt("something","");

// parseInt(string, base) - встроенный метод, где string строка которую нужно сделать числом и base система исчисления для этого числа (от 2 до 32)
console.log(parseInt('13px', 10));
console.log(parseInt('14px', 2));


//to Boolean

// 0, '', null, undefined, NaN эти значение всегда возвращают false в логическом контексте
//все остальные значения, даже пробелы, объекты, массивы и любые значения которые существуют возвращают true в логическом контексте
//пример в котором видно что условие выполняет в зависимости от булинового значения

let switcher = null;
if(switcher) { // так как значение аргумента условия null то булевым значением его будет false и поэтому сработает в код после else
  console.log('Working');
} else {
  console.log("don't working");
}

switcher = 1;// тут значение изменяется и булевое значение изменится на true и ответ будет другой
switcher ? console.log('Working') : console.log("don't working");
//2 применяем оператор Boolean, очень редко используется
console.log(typeof(Boolean('4')));

//3 !! двойной оператор отрицания, тоже используется редко. Работает так. Одиночный оператор отрицания НЕ приводит к логическому контексту и меняет в противоположную сторону, а второй оператор отрицания возвращает первоначальную сторону, но только в логическом контексте
console.log(typeof(!!"34"));
