//todo write script what return picture below
//*
//**
//***
//****
//*****
//******
//*******

// let result = "";

// for (let i = 1; i < 7; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// Место для первой задачи. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// function firstTask() {
  //вариант 1
  for(let i = 5; i <=10; i++){
    console.log(i);
  }
  //вариант 2
//   let i = 5;
//   while(i <=10){
//     console.log(i);
//     ++i;
//   }
// }
// firstTask();

// Место для второй задачи. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTask() {
  for(let i = 20; i> 10; i--){
    console.log(i);
    if(i === 13) break;
  }
}
secondTask();

// Место для третьей задачи. При помощи цикла for выведите чётные числа от 2 до 10 включительно
function thirdTask() {
  for(let i = 2; i<=10; i++){
    if(i%2 === 0){
      console.log(i);
    }
  }
}
thirdTask();
// Место для четвертой задачи. Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  // Пишем решение вот тут
  let i = 2;
  while(i<=16){
    if(i%2 === 0){
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}
fourthTask();

// Место для пятой задачи. Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
  const arrayOfNumbers = [];
  let j = 5;
  for(let i = 0; i <= 4; i++){
    arrayOfNumbers[i] = 5;
    j++;
  }
  return arrayOfNumbers;
}
fifthTask();
