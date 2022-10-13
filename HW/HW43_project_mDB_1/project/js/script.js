/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
//1
const adv = document.querySelector(".promo__adv");
const advImg = adv.querySelectorAll("img");
console.log(advImg);
//* usual loop
// for (let i = 0; i < advImg.length; i++) {
//   advImg[i].remove();
// }
//* loop for...of
// for (let i of advImg) {
//   i.remove();
// }
//* method forEach()
advImg.forEach((e) => e.remove());
//2
document.querySelector(".promo__genre").textContent = "ДРАМА";
//3
document.querySelector(".promo__bg").style.backgroundImage =
  'url("/HW/HW43_project_mDB_1/project/img/bg.jpg")';
//4 & 5
const movies = document.querySelectorAll(".promo__interactive-item");
movieDB.movies.sort();
movies.forEach((elem, i) => {
  elem.textContent = `${i + 1}. ${movieDB.movies[i]}`;
});

