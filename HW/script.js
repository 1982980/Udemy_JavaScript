let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Какой последний фильм смотрели?", ""),
//     b = prompt("Какую оценку поставите?", "");
//     switch(a, b) {
//       case null:
//         console.log("error");
//         i--;
//         break;
//         case '':
//           console.log("error");
//           i--;
//           break;
//           case a.length < 50:
//             console.log('error');
//             i--;
//             break;
//             default:
//             personalMovieDB.movies[a] = b;
//             console.log('Done');
//   }
// }

// console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Простмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
