//* Напишите код, как получить… 1.элемент <div> 2.<ul> 3.второй <li> (с именем Пит)?
// console.log(
// document.body.firstElementChild
// document.body.childNodes[1]
// document.body.children[0]
// );
// console.log(document.body.children[0].nextElementSibling);
// console.log(document.body.children[1].lastElementChild);

//* Напишите код, который выделит красным цветом все ячейки в таблице по диагонали. Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
let table = document.body.firstElementChild;//* получил элемент-таблицу в переменную
let tr = table.rows;//* из переменной с таблицей, получил псевдомассив строк таблицы в переменную

for (let i = 0; i < tr.length; i++) {//* запустил цикл который перебирает псевдомассив со строками
  let td = tr[i].cells;//* задал переменную с псевдомассивом ячеек каждого элемента псевдомассива со строками
  td[i].style.backgroundColor = "red";//* передаю элементу псевдомассива ячеек с индексом итерации цикла новое свойство цвета фона
}
