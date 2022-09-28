"use strict";
const newElement = document.querySelector(".todolist--new-item"),
  list = document.querySelector("ul");
let newItem;

newElement.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    list.innerHTML += `<li class="todolist--item"><label><input type="checkbox" /><p>${this.value}</p></p><span></span></label></li>`;
    this.value = "";
  }
});
