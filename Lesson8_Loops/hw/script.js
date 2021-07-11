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

function simpleDigitals(a, n) {
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (!i % j == 0) {
        console.log(i);
      }
    }
  }
}

simpleDigitals(2, 10);

//не получается разобраться как это работает. Нужно попробовать еще раз на свежую голову
