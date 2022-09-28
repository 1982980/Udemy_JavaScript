"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
let movieName,
    movieGrade;
for(let i=0; i<2;i++){
  movieName = prompt('Один из последних просмотренных фильмов?','');
  movieGrade = +prompt('На сколько оцените его?','');
  personalMovieDB.movies[movieName] = movieGrade;
}

/*function rememberMyFilm(){
for(let i=0; i<2; i++){
  /*
  const movieName;
  const movieGrade;
  //ver1
  do{
    movieName = prompt("Один из последних просмотренных фильмов?");
  }while (movieName === "" || movieName == null || movieName.length > 50);

  do{
    movieGrade = prompt("На сколько оцените его?");
  } while (movieGrade === "" || movieGrade == null);

  personalMovieDB.movies[movieName] = movieGrade;
  */
  // ver 2
  /*const movieName = prompt("Один из последних просмотренных фильмов?",'').trim();
  const movieGrade = prompt("На сколько оцените его?",'');
  if(movieName !== null && movieGrade !== null && movieName !== '' && movieGrade !== '' && movieName.length < 50){
    personalMovieDB.movies[movieName] = movieGrade;
    console.log("Done!");
  } else {
    i--;
    console.log("Error");
  }
}
}
rememberMyFilm();

function detectPersonalLevel(count){
  if(count < 10){
    alert("Просмотрено довольно мало фильмов");
  } else if (10 >= count && count <= 30) {
    alert("Вы классический зритель");
  } else if(count > 30){
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

detectPersonalLevel(personalMovieDB.count);*/
