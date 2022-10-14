const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");//*сохраняю элементы страницы в переменную
// btn.onclick = () => alert("Click");//* один из методов вызова обработчика событий, но он неэффективен, так как его сложно удалить/отключить и его нельзя повесить несколько обработчиков на одно событие(обработчик перезапишется последним последним обработчиком)
btn.addEventListener("click", () => alert("Click"));
btn.addEventListener("click", () => alert("Click one more time"));

// let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener("click", deleteElement);
  // }
};

btn.addEventListener("click", deleteElement);
overlay.addEventListener("click", deleteElement);

const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});

//для нескольких элементов используем forEach. это возможно только, если элементы получены querySelectorALL
btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement);
});

//опциональный параметр для addEventListener
btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});
