"use strict";
// const btns = document.querySelectorAll("button"),
//   wrapper = document.querySelector(".btn-block");

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add("red", "jhjhjhjh"));
// console.log(btns[0].classList.remove("blue"));
// console.log(btns[0].classList.toggle("blue"));

// if (btns[1].classList.contains("red")) {
//   console.log("red");
// }

// btns[0].addEventListener("click", () => {
// if (!btns[1].classList.contains("red")) {
//   btns[1].classList.add("red");
// } else {
//   btns[1].classList.remove("red");
// }
// btns[1].classList.toggle("red");
// });
//устаревший метод возвращает строку с классами
// console.log(btns[0].className);

//делегирование событий
// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.tagName == "BUTTON") {
//     console.log("Hello");
//   }
// });

// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.matches("button.red")) {
//     console.log("Hello2");
//   }
// });

// btns.forEach(btn => {
//   btn.addEventListener('click', (e) => console.log('Hello world'));
// });

// const btn = document.createElement("button");
// btn.classList.add("red");
// wrapper.append(btn);

// const btns = document.querySelectorAll("button");
// const wrapper = document.querySelector(".btn-block");

// console.log(btns[0].classList.length);

//! classList возвращает коллекцию DOM элементов, то есть псевдомассив

//! length возвращает количество классов у элемента
// console.log(btns[0].classList.item(0)) ;
//! метод item возвращает название класса по индексу
// console.log(btns[0].classList.add("red"));
//! добавляет новый класс
// console.log(btns[0].classList.remove("blue"));
//! удаляет определённый класс
// console.log(btns[0].classList.toggle("blue"));
//! метод toggle добавляет определенный класс, если его нет, или удаляет этот класс если он есть в массиве ClassList
// btns[0].addEventListener('click', () => {
//   if(!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red')
//   } else {
//     btns[1].classList.remove('red');
//   }
// });
//todo теперь использую toggle
// btns[0].addEventListener("click", () => {
//   btns[1].classList.toggle("red");
// });
//todo className устаревшая функция возвращает строку с названием классов
// console.log(btns[0].className);
/*
wrapper.addEventListener("click", (event) => {
  if (event.target && event.target.tagName == "BUTTON") {
    console.log("Hello world");
  }
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
*/
const btns = document.querySelectorAll("button");
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add("red"));
// console.log(btns[0].classList.remove("blue"));
// console.log(btns[0].classList.toggle("blue"));

// if (btns[1].classList.contains("red")) {
//   console.log("true");
// } else {
//   console.log("false");
// }

btns[0].addEventListener("click", () => {
  // if (!btns[1].classList.contains("red")) {
  //   btns[1].classList.toggle("red");
  // } else {
  btns[1].classList.toggle("red");
  // }
});

// console.log(btns[0].className);

const wrapper = document.querySelector(".btn-block");

wrapper.addEventListener("click", (event) => {
  if (event.target && event.target.matches("button.red")) {
    console.log("Hello");
  }
});

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("Hello");
//   });
// });

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
