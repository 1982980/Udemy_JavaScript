// javascript - высокоуровневый компилируемый язык программирования
//? статья о компилируемых и интерпритируемых языках программирования

// Утечки памяти
//1 Создание лишних объектов глобального вызова, без использования строгого режима и объявления переменных
function func() {
  smth = "string"; // не объявил переменную и поэтому она записана в глобальную переменную window
}
//2 забытые таймеры,которые в себе хранят ссылки на другие объекты, которые могли бы быть удалены
const someRec = getData();
const node = document.querySelector(".class");

setInterval(function () {
  if (node) {
    node.innerHTML = someRec;
  }
}, 1000);

//3 Обработчики событий на ненужных элементах. При удалении элементов со страницы, обработчики событий не дают удалить ненужные элементы. В современных браузерах обработчики событий для удаленных элементов удаляются автоматически

//4 Если большой объем данных сохраняется в замыкании
function outer() {
  const potHugeArray = [];
  return function inner() {
    potHugeArray.push("Hello");
    console.log("Hello");
  };
}

const sayHello = outer();

//5 утечка памяти при создании элементов DOM структуры с помощью JS и при удалении элемента из DOM структуры, но остается переменная в коде JS
function createElement() {
  const div = document.createElement("div");
  div.id = "test";
  return div; // заменяем на document.body.append(testDiv), тогда мы не создаем дополнительных переменных в коде;
}

const testDiv = createElement();

document.body.append(testDiv);

function deleteElement() {
  document.body.removeChild(document.getElementById("test"));
}

deleteElement();
