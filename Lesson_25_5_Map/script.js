"use strict";

const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/04/1993',
  showMyPublicDate: function(){
    console.log(`${this.name} ${this.surname}`);
  }
};

const userMap = new Map(Object.entries(user));
const newUserObj = Object.fromEntries(userMap);


console.log(newUserObj);
const shops = [
  { rice: 500 },
  { oil: 200 },
  { bread: 50 }
];

const budget = [5000, 15000, 20000];
const map = new Map([
  [{ paper: 400 }, 8000]
]);

//! Метод set
// можно перебрать методом forEach (или простым циклом) и использовать внешний массив данных, а не добавлять его вручную и получать из других источников данных
//* вариант методом forEach()
// shops.forEach((shop, i) => {
//   map.set(shop, budget[i]);
// });
//* вариант циклом
// for( let shop of shops){
//   let i = 0;
//   map.set(shop, budget[i]);
//   i++;
// }
// console.log(map);

//? можно вводить построчно
map.set(shops[0], 5000);
map.set(shops[1], 15000);
map.set(shops[2], 20000);

//? можно вводить одной строкой, но для удобства чтения сделать перенос. После каждого set вызывается новый вариант map
// map.set(shops[0], 5000)
//   .set(shops[1], 15000)
//   .set(shops[2], 20000);

//! метод get
//*Этим методом мы получаем свойство элемента map по ключу. В примере ниже ключ(объект) мы получаем из массива объектов shops
// const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

// const budget = [5000, 15000, 20000];
// const map = new Map([[{ paper: 400 }, 8000]]);
// shops.forEach((shop, i) => {
//   map.set(shop, budget[i]);
// });
// console.log(map.get(shops[1]));
//! метод has
//*возвращает `true`, если ключ `key` присутствует в коллекции, иначе `false`.
// const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];
// const budget = [5000, 15000, 20000];
// const map = new Map([[{ paper: 400 }, 8000]]);
// shops.forEach((shop, i) => {
//   map.set(shop, budget[i]);
// });
// console.log(map.has(shops[1]));

//! метод keys() - возвращает итеррируемый объект со свойствами объекта Map
// const goods = [];
// for(let shop of map.keys()){
//   goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

//! Метод values() - возвращает объект со всеми значениями объекта Map
// for(let price of map.values()){
//   console.log(price);
// }
// console.log(map.values());

//! Метод entries() - возвращает массив с массивами
// for(let shop of map.entries()){
//   console.log(shop);
// }

//! метод forEach() - перебирает весь объект Map и возвращает результат колл-бэк функции для каждого элемента
// map.forEach((value, key, map) => {
//   console.log(value, key);
// });
