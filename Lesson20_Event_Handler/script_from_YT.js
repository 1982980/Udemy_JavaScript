// document.body.innerHTML = "<h1>Hello world</h1>";
/*const buttonOne = document.querySelector(".btn");
const buttonTwo = document.querySelector(".btnTwo");

function handleClick() {
  console.log("It's cool");
}
buttonOne.addEventListener("click", handleClick);
buttonTwo.addEventListener("click", handleClick);

buttonTwo.removeEventListener("click",handleClick);//todo для того чтобы применять removeEventListener нужно вторым параметром передавать имя функции, которую создали раньше. Если в обработчик события передавать безымянную функцию или стрелочную, то снятие обработчика события не будет работать. Для этого нужно использовать только именованную функцию
*/
/*
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

function handleClick() {
  console.log("It's cool");
  this.hidden = true;
  // Внутри обработчика события, а точнее его функции this ссылается на текущий элемент, то есть на тот, на котором, как говорят, «висит» (т.е. назначен) обработчик.
}
buttons.forEach((btn) => btn.addEventListener("click", handleClick));
*/

const button = document.querySelector(".btn"); //* получил элемент в переменную

button.addEventListener("click", hideText, true);
function hideText() {
  //* создал функцию для скрытия текста
  const text = document.querySelector(".text"); //* получил в локальную переменную нужный элемент
  text.hidden = true; //* задал CSS свойство элементу hidden = true, текст скрылся
  const button = document.querySelector(".btn"); //* получил в локальную переменную кнопку
  // button.removeEventListener("click", hideText); //* удалил обработчик событий на эту функцию
  button.addEventListener("click", showText, true); //* добавил обработчик событий на другую функцию, которая покажет текст
}

function showText() {
  //* создал функцию для показа текста
  const text = document.querySelector(".text"); //* получил в локальную переменную нужный элемент
  text.hidden = false; //* задал CSS свойство элементу hidden = false, текст показался
  const button = document.querySelector(".btn"); //* получил в локальную переменную кнопку
  // button.removeEventListener("click", showText); //* удалил обработчик событий на эту функцию
  button.addEventListener("click", hideText); //* добавил обработчик событий на другую функцию, которая скроет текст
}
/* 1. вешаю обработчик событий на кнопку и передаю в него функцию скрытия текста
2. Создаю функцию скрытия текста
  2.1 создаю локальную переменную с текстом
  2.2 создаю локальную переменную с кнопкой
  2.3 в локальную переменную текста передаю новое css свойство, которое скроет текст
  2.4 удаляю это же обработчик событий, который скрывает текст
  2.5 вешаю обработчик событий на ту же кнопку и передаю в него функцию показа текста
3. Создаю функцию показа текста
  3.1 создаю локальную переменную с текстом
  3.2 создаю локальную переменную с кнопкой
  3.3 в локальную переменную текста передаю новое css свойство, которое покажет текст
  2.4 удаляю это же обработчик событий, который показывает текст
  2.5 вешаю обработчик событий на ту же кнопку и передаю в него функцию скрытия текста*/
