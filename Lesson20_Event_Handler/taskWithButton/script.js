/*
const pane = document.querySelectorAll(".pane");
pane.forEach((e) =>
  e.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  )
);

const btns = document.querySelectorAll(".remove-button"),
  showAll = document.querySelector(".show-all");
function hideText() {
  this.parentNode.hidden = true;
  console.log("work!");
}
btns.forEach((e) => e.addEventListener("click", hideText));

function showAllBlocks() {
  pane.forEach((e) => (e.hidden = false));
  console.log("It's OK");
}
showAll.addEventListener("click", showAllBlocks);
*/
const pane = document.querySelectorAll(".pane");
for (let i = 0; i <= pane.length; i++) {
  pane[i].insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
  pane[i]
    .querySelector(".remove-button")
    .addEventListener("click", (e) => (e.parentNode.hidden = true));
}
