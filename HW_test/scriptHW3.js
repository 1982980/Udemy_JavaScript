"use strict";
let numberOfFilms;
function start(){
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "например, 5");
  while(numberOfFilms == null || numberOfFilms == '' || !Number.isFinite(numberOfFilms)){
    numberOfFilms = +prompt("Повторите пожалуйста, сколько фильмов вы уже посмотрели?");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function rememberMyFilm(){
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
}

rememberMyFilm();

function detectPersonalLevel(){
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
}

detectPersonalLevel();

function showMyDB(){
  if(personalMovieDB.privat === false){
    return console.log(personalMovieDB);
  }
}
function writeYourGenres(){
  for(let i = 1; i <= 3; i++){
    personalMovieDB.genres[i-1] = prompt(`"Ваш любимый жанр под номером ${i}"`);
  }
}
console.log(personalMovieDB);

/*class PersonalMovieDB {
  constructor(count, movies, actors, genres, privat, addNewFilm) {
    this.count = count;
    this.movies = movies;
    this.actors = actors;
    this.genres = genres;
    this.privat = privat;
    this.addNewFilm = function () {
      for (let i = 1; i < 3; i++) {
        let film = prompt("Один из последних посмотренных фильмов").trim();
        while (film === "" || film === null || film.length > 50) {
          film = prompt("Повторите. Один из последних посмотренных фильмов").trim();
        }
        let filmScore = +prompt("На сколько оцените его?");
        while (filmScore === "" || filmScore === null) {
          film = prompt("Повторите. Один из последних посмотренных фильмов");
        }
        this.movies[film] = filmScore;
      }
    };
    this.checkPersonalMovieDBCount = function () {
      if (this.count < 10) {
        alert("Просмотрено довольно мало фильмов");
      } else if (10 <= this.count && this.count <= 30) {
        alert("Вы классический зритель");
      } else if (this.count > 30) {
        alert("Вы киноман");
      } else if (this.count == isNaN && this.count == ''){
        do {
          numberOfFilms = +prompt(
            "Произошла ошибка, Сколько фильмов вы уже посмотрели"
          );
        } while (true);
      }
    };
    this.showMyDB = function(){
      if(!this.privat){
        console.log(personalMovieDB);
      }
    }
    this.writeYourGenres = function(){
      for(let i = 1; i >= 3; i++){
        this.genres[i-1] = prompt(`Ваш любимый жанр под номером ${1}`);
      }
    }
  }
}

const personalMovieDB = new PersonalMovieDB(numberOfFilms, {}, {}, [], false);

personalMovieDB.checkPersonalMovieDBCount();
personalMovieDB.addNewFilm();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

// console.log(personalMovieDB);*/
