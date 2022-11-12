/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout
*/

/*
//? SetInterval
function printNumbers(from, to){
  let i = from;
  let timerId = setInterval(()=>{
    console.log(i);
    i++;
    if(i > to){
      clearInterval(timerId);
    }
  }, 1000);
}

printNumbers(1,5);

//? SetTimeout recursion
// function printNumbers(from,to){
//   let i = from;
//   let timerId = setTimeout(function printNum(){
//     console.log(i);
//     i++;
//     if(i>to){
//       clearTimeout(timerId);
//     } else {
//       timerId = setTimeout(printNum, 1000);
//     }
//   }, 1000);
// }

// printNumbers(1,5);
*/
let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
