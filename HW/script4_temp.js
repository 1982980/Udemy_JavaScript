//Задача 1
// const container = document.querySelector("#container");
// console.log(container);
// container.addEventListener("click", (event) => {
//   if (event.target.className != "remove-button") {
//     return;
//   }
//   let pane = event.target.closest(".pane");
//   pane.remove();
// });

//Задача 2
// поместить все текстовые узлы в элемент <span>
// он занимает только то место, которое необходимо для текста
// let tree = document.querySelector("#tree");
// for (let li of tree.querySelectorAll("li")) {
//   let span = document.createElement("span");
//   li.prepend(span);
//   span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
// }

// //  ловим клики на всём дереве
// tree.onclick = function (event) {
//   if (event.target.tagName != "SPAN") {
//     return;
//   }

//   let childrenContainer = event.target.parentNode.querySelector("ul");
//   if (!childrenContainer) return; // нет детей

//   childrenContainer.hidden = !childrenContainer.hidden;
// };

//Задача 3
let td = document.querySelectorAll("td");

console.log(td);
document.addEventListener("click", (event) => {
  if (event.target.dataset.type == "number") {
  }
});
