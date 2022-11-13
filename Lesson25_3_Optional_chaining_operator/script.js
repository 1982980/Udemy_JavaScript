"use strict";

const box = document.querySelector(".box");
const block = document.querySelector(".block");

console.log(block);

// if (block) {
//   console.log(block.textContent);
// }
// block?.textContent = '123';// error
console.log(1 + 3);

const userData = {
  name: "Roma",
  age: null,
  say: function () {
    console.log("Hello");
  },
};

userData.say();
userData.hello?.();
// if(userData && userData.skills && userData.skills.js){
//   console.log(userData.skills.js);
// }

console.log(userData.skills?.js);
