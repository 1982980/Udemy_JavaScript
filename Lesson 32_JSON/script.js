"use strict";

const persone = {
  name: "John",
  tel: "+444444",
  parents: {
    mam: "uuu",
    dad: "TTT",
  },
};

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mam = "Ann";

console.log(persone);
console.log(clone);
