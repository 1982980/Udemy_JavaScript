/*
Напишите функцию, которая вычисляет факториал.

Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.
*/
function factorial(num) {
  // if(typeof(num)!= "number" || !Number.isInteger(num)){//* проверка на число и целое число
  //   /*if (num >= 1) {
  //     return num * factorial(num - 1);
  //   } else {
  //     return 1;
  //   }*/

  //   //* более короткий вариант с ...
  return num >= 1 ? num * factorial(num - 1) : 1;
}

console.log(factorial(5));
console.log(factorial(10));

//* next task

/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии.
*/

function sumTo(number) {
  /* циклом
  let sum = 0;
for(let i = number; i>0; i--){
  sum+=i;
}
return sum;
*/

  //* рекурсией
  if (number === 1) {
    return 1;
  } else {
    return number + sumTo(number - 1);
  }

  //* по формуле арифметической прогрессии sumTo(n) = n*(n+1)/2
  // return number * (number + 1)/2;
}

console.log(sumTo(100));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));

//* next task
//* нужно получить сумму зарплат с помощью рекурсии, глубина объекта может быть любой

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
      {
        name: "Ive",
        salary: 3000,
      },
    ],
  },
};

function calculateSalary(company) {
  //* создал функцию
  if (Array.isArray(company)) {
    //* это базис рекурсии или базовое условие, то простейшее действие к которому должна прийти функция - массив. если аргумент массив, возвращаю значение ниже
    //! что будет если массив не будет иметь элемент salary или будет пустым
    //! что если будет еще один массив, в котором будут другие элементы
    return company.reduce((total, current) => total + current.salary, 0); //* получаю сумму с помощью метода reduce() начиная с первого элемента [0].
  } else {
    //* иначе получаю рекурсивное условие
    let sum = 0; //* задаю переменную суммы
    for (let subCompany of Object.values(company)) {
      //* с помощью цикла перебираю все элементы объекта
      sum += calculateSalary(subCompany); //* каждый элемент, передаю в рекурсивную функцию и складываю результат этой функции с локальной переменной sum
    }
    return sum; //* возвращаю переменную sum. это и будет результатом для рекурсивной функции
  }
}

console.log(calculateSalary(company));

function fibonaci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonaci(n - 1) + fibonaci(n + 1);
  }
}
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// console.log( fib(3) ); // 2
// console.log( fib(7) ); // 13
console.log(fib(77)); //

//* new task
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
/*
function printList(obj) {
  //* решение циклом
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
  //* решение рекурсией
  console.log(obj.value);
  if (obj.next) {
    printList(obj.next);
  }
}

printList(list);
*/

function printList(obj) {
  //* решение циклом
  let tmp = list;
  let arr = [];

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
    ;
  }
  for(let i = arr.length-1; i>=0; i--){
    console.log(arr[i]);
  }
  //* решение рекурсией
//   if (obj.next) {
//     printList(obj.next);
//   }
//   console.log(obj.value);
}

printList(list);
