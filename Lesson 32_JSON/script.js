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

//!Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
console.log(JSON.stringify(user));

let userJson = JSON.stringify(user);
console.log(JSON.parse(userJson));

//! В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени. Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению. Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (key!== "" && value == meetup)? undefined : value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
