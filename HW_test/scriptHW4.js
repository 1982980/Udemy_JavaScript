"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt(
      "Сколько фильмов вы уже посмотрели?",
      "например, 5"
    );
    while (
      personalMovieDB.count == null ||
      personalMovieDB.count == "" ||
      !Number.isFinite(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "Повторите пожалуйста, сколько фильмов вы уже посмотрели?"
      );
    }
  },
  rememberMyFilm: function () {
    for (let i = 0; i < 2; i++) {
      let movieName, movieGrade;
      movieName = prompt("Один из последних просмотренных фильмов?", "");
      movieGrade = prompt("На сколько оцените его?", "");
      if (
        movieName != "" &&
        movieGrade != "" &&
        movieName != null &&
        movieGrade != null &&
        movieGrade.length <= 50
      ) {
        personalMovieDB.movies[movieName] = movieGrade;
      } else {
        i--;
        console.log("Error!");
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман!");
      console.log("Вы киноман!");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      return console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(
        `"Ваш любимый жанр под номером ${i}"`
      );
      if (
        personalMovieDB.genres[i - 1] === null ||
        personalMovieDB.genres[i - 1] === ""
      ) {
        i--;
      }
    }
    personalMovieDB.genres.forEach((elem, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${elem}`);
    });
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.privat
      ? (personalMovieDB.privat = false)
      : (personalMovieDB.privat = true);
    personalMovieDB.showMyDB();
  },
};

personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);
