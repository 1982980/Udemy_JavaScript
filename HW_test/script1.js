"use strict";

const numberOfFilms = +prompt(
  "Сколько фильмов вы уже посмотрели",
  "например, 5"
);

class PersonalMovieDB {
  constructor(count, movies, actors, genres, privat, addNewFilm) {
    this.count = count;
    this.movies = movies;
    this.actors = actors;
    this.genres = genres;
    this.privat = privat;
    this.addNewFilm = function () {
      for (let i = 1; i < 3; i++) {
        let film = prompt("Один из последних посмотренных фильмов");
        let filmScore = +prompt("На сколько оцените его?");
        this.movies[film] = filmScore;
      }
    };
  }
}

const personalMovieDB = new PersonalMovieDB(numberOfFilms, {}, {}, [], false);

personalMovieDB.addNewFilm();
console.log(personalMovieDB);
