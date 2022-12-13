/*
Задание:

Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

deepCount([1, 5, 3]) => 3

deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

deepCount([1, 2, [3, 4, [5]]]) => 7

deepCount([]) => 0

deepCount([[[[[[[[[]]]]]]]]]) => 8
*/

function deepCount(a){
let count = a.length;
for(let i=0; i <= a.length; i++){
  if(Array.isArray(a[i])){
    count += deepCount(a[i]);
  }
}

  // let count = 0;
  // function findArray(arr){
  //   count += arr.length;
  //   arr.every((elem) => {
  //     if(Array.isArray(elem)){
  //       findArray(elem);
  //     }
  //   });
  // }
  // findArray(a);
  return count;
}
console.log(deepCount([1, 5, 3]));
console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
// deepCount([1, 5, 3]);
//? Ответ: Создаю перменную count со значением 0. Создаю функцию-рекурсию c аргументом массив arr, в которой добавляю к переменной count длину массива. Затем проверяю каждый элемент массива, является ли он массивом, если true, то вызываю функцию-рекурсию. Иначе возвращаю count
