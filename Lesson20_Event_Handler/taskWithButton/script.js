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
