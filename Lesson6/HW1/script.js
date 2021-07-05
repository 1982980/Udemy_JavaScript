const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Какой последний фильм смотрели?", ""),
  b = prompt("Какую оценку поставите?", ""),
  c = prompt("Какой последний фильм смотрели?", ""),
  dd = prompt("Какую оценку поставите?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = dd;

console.log(personalMovieDB);
