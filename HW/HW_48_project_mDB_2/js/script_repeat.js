"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const advs = document.querySelectorAll(".promo__adv img"),
    oldBg = document.querySelector(".promo__bg"),
    genre = document.querySelector(".promo__genre"),
    filmList = document.querySelectorAll(".promo__interactive-list li");

  function deleteAdv() {
    advs.forEach((e) => e.remove());
  }
  function changeBackground() {
    oldBg.style.backgroundImage = 'url("/HW/HW_48_project_mDB_2/img/bg.jpg")';
  }
  function changeGenre(genreName) {
    genre.textContent = genreName;
  }

  function createMovieList(newList, oldList) {
    newList.movies.sort();

    oldList.forEach(
      (elem, i) =>
        (elem.innerHTML = `${i + 1}.${
          newList.movies[i]
        } <div class="delete"></div>`)
    );
  }
  createMovieList(movieDB, filmList);
  changeGenre("Драма");
  deleteAdv();
  changeBackground();
});
