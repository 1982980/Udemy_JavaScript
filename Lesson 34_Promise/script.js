"use strict";

// console.log("Запрос данных...");

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данних");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };
//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   }).catch(()=> {
//     console.error('Произошла ошибка');
//   }).finally(()=> {
//     console.log("Finally");
//   });

const test = time => {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve()
    }, time);
  })
};

// test(1000).then(()=> console.log(1000));
// test(2000).then(()=> console.log(2000));

// Promise.all([test(1000), test(2000)]).then(()=>{
//   console.log("All");
// });

Promise.race([test(1000), test(2000)]).then(()=>{
  console.log("All");
});

/*
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
*/

function delay(ms) {
  // ваш код
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));

let promiseToCleanTheRoom = new Promise(function(resolve, reject){

  let isClean = true;

  if(isClean){
    resolve();
  } else {
    reject();
  }
});


// Task
//Напишите функцию `delay(ms)`, которая возвращает промис, переходящий в состояние `"resolved"` через `ms` миллисекунд.

function delay(ms){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, ms);
  });
};

delay(2000)
  .then(()=> console.log("It's OK!"));

//Task
//Напишите код, который все URL из этого массива загружает один за другим (последовательно) и сохраняет результаты в массиве results, а потом выводит.
'use strict';

let urls = [
  'user.json',
  'guest.json'
];

let p = new Promise((resolve, reject)=> {

});


