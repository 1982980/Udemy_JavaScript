// let i = 3;
// while (i) {
//   console.log(i--);
// }

// let i = 0;
// while (++i < 5) {
//   console.log(i);
// }
// 1, 2, 3, 4

// let i = 0;
// while (i++ < 5) {
//   console.log(i);
// }
// 1, 2, 3, 4, 5

// for(let i = 0; i < 5; i++) {
//   console.log(i); //0, 1, 2, 3, 4
// }

// for (let i = 0; i < 5; ++i) {
//   console.log(i); //0, 1, 2, 3, 4
// }

// for(let i = 2; i <= 10; i++) {
//   if(i % 2 == 0) {
//     console.log(i);
//   }
// }
// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}`);
//   i++;
// }

// let num = +prompt("Число больше 100", "");
// while (num < 100 && num) {
//   num = +prompt("Это не верно. Введите число больше 100", "");
// }

// function simpleDigitals(a, n) {
//   for (let i = 2; i <= n; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (!i % j == 0) {
//         console.log(i);
//       }
//     }
//   }
// }

// simpleDigitals(2, 10);

//не получается разобраться как это работает. Нужно попробовать еще раз на свежую голову

// function simpleDigitals(num) {
//   NextNum: for (let i = 2; i <= num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         continue NextNum;
//       }
//     }
//     console.log(i);
//   }
// }
// simpleDigitals(100);

//todo а. Выведите столбец чисел от 1 до 50
// for(let i = 1; i <= 50; i++) {
//   console.log(i);
// }

//todo Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран
// const arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// };

//todo Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива
// const arr = [2,3,4,5];
// let total = 1;

// for (let i = 0; i < arr.length; i++) {
//   total*=arr[i];
// }
// console.log(total);

//todo Задача. 'Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь','Россия', 'Украина' С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь''
// const obj = {
//   'Minsk': 'Belorus',
//   'Kiev': 'Ukraine',
//   'Moskow': 'Russia',
// };

// for(let i in obj) {
//   console.log(i + "- it is" + obj[i]);
// }

//todo Решите эти задачи сначала через цикл while, а затем через цикл for.Выведите столбец чисел от 1 до 100.Выведите столбец чисел от 11 до 33.Выведите столбец четных чисел в промежутке от 0 до 100.С помощью цикла найдите сумму чисел от 1 до 100
// let sum = 0;
// let i = 1;

// while(i <= 100) {
//   sum+=i;
//   i++;
// };

// console.log(sum);

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum);

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//todo Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток. Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4. Напишите код, который выводит все простые числа из интервала от 2 до n. Для n = 10 результат должен быть 2,3,5,7

let n = 10;
NextTry:
for(let i = 2; i <= n; i++) {
  for(let j = 2; j < i; j++) {
    if(i % j == 0) continue NextTry;
  }
  console.log(i);
}

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

switch(number) {
  case 0 : alert('Вы ввели число 0');
  break;
  case 1 : alert('Вы ввели число 1');
  break;
  case 2 : alert('Вы ввели число 2, а может и 3');
    break;
  case 3 : alert('Вы ввели число 2, а может и 3');
    break;
}
//
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

function min (a, b) {
  return a > b ? a : b;
}

let x = 3;
let n =3;
let rezult;

function pow(x, n) {
  for(let i = 2; i <= n; i++) {
    rezult = x * i;
  }
  console.log(rezult);
}
