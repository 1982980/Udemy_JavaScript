"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  color: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("TEST");
  },
};

options.makeTest();
// console.log(options);
// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`свойство ${key} имеет значение ${options[key]}`);
//   }
//   counter++;
// }
// console.log(counter);
