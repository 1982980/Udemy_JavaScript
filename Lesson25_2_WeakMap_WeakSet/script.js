// 'use strict';

// let user = {name: "John"};
// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(user);
// console.log(map);
// console.log(map.has(user));

//? Пример использования для хранения участников чата, которые онлайн и удаления тех, которые оффлайн
let cash = new WeakMap();
function cashUser (user){
  if (!cash.has(user)){
    cash.set(user, Date.now());
  }
  return cash.get(user);
}

let lena = {
  name: 'Helen',
};

let alex = {name: 'Alex'};

cashUser(lena);
cashUser(alex);
lena = null;
console.log(cash.has(lena));
console.log(cash.has(alex));

//? WeakSet
let messages = [
  {text:'Hello', from: 'John'},
  {text:'World', from: 'John'},
  {text:'.....', from: 'John'},
];

let readedMessages = new WeakSet();

readedMessages.add(messages[0]);
// readedMessages.add(messages[1]);

messages.shift();
console.log(readedMessages.has(messages[0]));
