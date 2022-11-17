"use strict";
//Живые и статические коллекции

const boxesQuery = document.querySelectorAll(".box");
const boxesGet = document.getElementsByClassName("box");

boxesQuery.forEach((box) => {
  if (box.matches(".this")) console.log("This one");
});

console.log(boxesQuery[0].closest(".wrapper"));
// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//   const div = document.createElement("div");
//   div.classList.add("box");
//   document.body.append(div);
//   // boxesGet[boxesGet.length] = div; //? метод length для живых HTML коллекций не работает и вернет ошибку
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
	console.log( a + " <> " + b );
});
