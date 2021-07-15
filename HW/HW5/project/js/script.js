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
    "Скотт Пилигрим против...",
    "Ла-ла лэнд",
    "Одержимость",
  ],
};
//удаляю рекламный блок
const adv = document.querySelector(".promo__adv");
adv.remove();

//меняю "Комедия" на "драма"
function changeGanre(was, will) {
  let genreWas = document.querySelector(".promo__genre").textContent;
  if (genreWas == "КОМЕДИЯ") {
    document.querySelector(".promo__genre").textContent = "Драма";
  }
}
changeGanre();

//меняю задний фон постера
const promo = document.querySelector(".promo__bg");
console.log(promo);
promo.style.backgroundImage =
  'url("C:/Users/Roman/Git_Projects/Udemy_Javascript/HW/HW5/project/img/bg.jpg")';

//Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту в обратном порядке
//Добавить нумерацию выведенных фильмов
const sortedList = movieDB.movies.sort().reverse();
const films = document.querySelectorAll(".promo__interactive-item");
films.forEach((item, i) => (item.textContent = `${i + 1}. ${sortedList[i]}`));
