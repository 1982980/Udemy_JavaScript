"use strict";

/*
const adv = document.querySelector(".promo__adv"),
  advImg = adv.querySelectorAll("img"),
  genre = document.querySelector(".promo__genre"),
  bgImage = document.querySelector(".promo__bg"),
  movies = document.querySelectorAll(".promo__interactive-item"),
  btnConfirm = document.querySelector(".adding_confirm");

const advRemove = advImg.forEach((e) => e.remove());

genre.textContent = "ДРАМА";

bgImage.style.backgroundImage =
  'url("/HW/HW43_project_mDB_1/project/img/bg.jpg")';

movieDB.movies.sort(); //* сортировка по алфавиту
movies.forEach(function (elem, i) {
  elem.innerHTML =
    `${i + 1}. ${movieDB.movies[i]}` + '<div class="delete"></div>';
}); //* добавляю каждому элементу номер по порядку и название из переменной movieDB

//* новое задание
btnConfirm.addEventListener("click", function (e) {
  // console.log(movieDB.movies);
  e.preventDefault();
  let input = document.querySelector(".adding__input");
  checkLength(input.value);
  movieDB.movies.sort();
  console.log(movieDB.movies);
});

function checkLength(movieName) {
  if (movieName.length > 21) {
    return movieDB.movies.push(movieName.slice(0, 21).padEnd(24, "."));
  } else {
    return movieDB.movies.push(movieName);
  }
}

document.querySelector(".checkbox").addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("Добавляем любимый фильм");
  }
});
*/
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
    bgImage = document.querySelector(".promo__bg"),
    movies = document.querySelectorAll(".promo__interactive-item"),
    genre = document.querySelector(".promo__genre"),
    addInput = document.querySelector(".adding__input"),
    btnConfirm = document.querySelector(".adding_confirm");

  const removeAdv = (arr) => arr.forEach((e) => e.remove());

  const changeBg = () => {
    bgImage.style.backgroundImage =
      'url("/HW/HW43_project_mDB_1/project/img/bg.jpg")';
  };
  function changeGenre(element) {
    element.textContent = "драма";
  }

  function createFilmList(movieElementList) {
    movieDB.movies.sort();

    movieElementList.forEach(function (film, i) {
      film.innerHTML = `${i + 1}. ${
        movieDB.movies[i]
      } <div class="delete"></div>`;
    });

    document.querySelectorAll(".delete").forEach((e, i) => {
      e.addEventListener("click", () => {
        e.parentElement.remove();
        // movieDB.movies.splice(i,1);
        createFilmList(movieElementList);
      });
    });
  }

  btnConfirm.addEventListener("click", function (e) {
    e.preventDefault();
    let newFilm = addInput.value;
    const favorite = document.querySelector("[type='checkbox']").checked;
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${addInput.value.slice(0, 22)}...`;
      }
      if (favorite) {
        console.log("Добавляем ваш любимый фильм");
      }
    }
    movieDB.movies.push(newFilm);
    movieDB.movies.sort();
    createFilmList(movies);
    addInput.value = "";
  });

  removeAdv(advs);
  changeGenre(genre);
  changeBg();
  createFilmList(movies);
});
