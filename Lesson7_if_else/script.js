"use strict";
if (4 == 9) {
  console.log("OK!");
} else {
  console.log("Error!");
}

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Too much!");
// } else {
//   console.log("Ok");
// }

// num < 49 ? console.log("Error") : num > 100 ? console.log("Too much") : console.log("Ok");

const num = 51;
switch (num) {
  case 49:
    console.log("False");
    break;
  case 100:
    console.log("False too");
    break;
  case 50:
    console.log("True");
    break;
  default:
    console.log("Cool");
    break;
}
