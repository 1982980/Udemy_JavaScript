"use strict";
document.addEventListener('DOMContentLoaded',()=>{
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
const adv = document.querySelector(".promo__adv"),
  advImg = adv.querySelectorAll("img"),
  genre = document.querySelector(".promo__genre"),
  bgImage = document.querySelector(".promo__bg"),
  movies = document.querySelectorAll(".promo__interactive-item"),
  btn = document.querySelector('.adding_confirm'),
  input = document.querySelector('.adding__input'),
  checkbox = document.querySelector('.checkbox');

advImg.forEach((e) => e.remove());
//2
genre.textContent = "ДРАМА";
//3
bgImage.style.backgroundImage =
  'url("/HW/HW43_project_mDB_1/project/img/bg.jpg")';
//4 & 5
movieDB.movies.sort();
//* сортировка по алфавиту
movies.forEach(function (elem, i) {
  elem.innerHTML = `${i + 1}. ${movieDB.movies[i]}`;
});
//* добавляю каждому элементу номер по порядку и название из переменной movieDB

function addNewFilm(){
  btn.addEventListener('submit',()=> {
    input
  });
}
}
);
