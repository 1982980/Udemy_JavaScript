//task1

function sayHello(name) {
  return console.log(`Привет ${name}`);
}
sayHello("Антон");

//task2
//todo Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше. Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6]

function returnNeighboringNumbers(number) {
  const arr = [];
  arr.push(number - 1);
  arr.push(number);
  arr.push(number + 1);
  return console.log(arr);
}
returnNeighboringNumbers(5);

//task3
//todo Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

function getMathResult(base, repeat) {
  let result = `${base}`;
  let res = base;
  for (let i = 1; i < repeat; i++) {
    res += base;
    result = result + `---${res}`;
  }
  if (repeat <= null || typeof repeat === NaN) {
    return console.log(base);
  } else {
    return console.log(result);
  }
}
getMathResult(10, "-5");

//task4
//todo Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах. Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка". НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
//формула площади поверхности куба S = 6*a2
// формула объема куба V = a3
// а - длинна ребра куба

function calculateVolumeAndArea(edge) {
  if (typeof edge !== "number" || edge <= 0 || !Number.isInteger(edge)) {
    return console.log("При вычислении произошла ошибка");
  } else {
    let area = (edge*edge) * 6;
    let volume = edge*edge*edge;
    let answer = `Объем куба:${volume}, площадь всей поверхности:${area}`;
    return console.log(answer);
  }
}
calculateVolumeAndArea(0);

//task5
//todo Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Функция принимает только целое число от 1 до 36. Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:"Ошибка. Проверьте правильность введенного номера места".Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber(siteNumber) {
  if(siteNumber>36 || siteNumber === 0){
    return console.log("Таких мест в вагоне существует");
  } else if(typeof(siteNumber)!=='number' || !Number.isInteger(siteNumber) || siteNumber < 0){
    return console.log("Ошибка. Проверьте правильность введенного номера места");
  }

  let coupe = Math.ceil(siteNumber/4);
  return console.log(`Ваше купе №${coupe}`);
}
getCoupeNumber(6.7);

//todo Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

function getTimeFromMinutes(minutes) {
if(typeof minutes !== "number"||!Number.isInteger(minutes)|| minutes<0){
  return console.log("Ошибка, проверьте данные");
}
  let hour = Math.floor(minutes/60);
  let minute = minutes - (hour*60);
  if(hour===0 || hour>=5){
    return console.log(`Это ${hour} часов и ${minute} минут`);
  } else if (hour === 1|| hour > 20){
  return console.log(`Это ${hour} час и ${minute} минут`);
} else if (hour >=2 || hour<= 4){
  return console.log(`Это ${hour} часа и ${minute} минут`);
}
}
getTimeFromMinutes(57);

//todo Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

function findMaxNumber(arg1, arg2, arg3, arg4) {
  if(arguments.length <4 || typeof(arg1)!=="number"||typeof(arg1)!=="number"||typeof(arg2)!=="number"||typeof(arg3)!=="number"||typeof(arg4)!=="number"){
    return console.log(0);
  }
  return console.log(Math.max(arg1,arg2,arg3,arg4));
}
findMaxNumber(4,56,8,"2");

//todo Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу. Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

function fib(number) {
  let arrFib = [0,];
  let secondNum = 1;
  let prev = 1;
  let cur = 1;
    for(let i = 0; i <= number; i++){
      arrFib.push(cur);
      prev = cur;
      cur = cur+prev;
    }
    console.log(arrFib);
}
fib(5);
