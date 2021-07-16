const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");
// btn.onclick = () => alert("Click");
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

//для нескольких єлементов используем forEach. Это из-за псевдомассива
btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement);
});

//опциональный параметр для addEventListener
btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});
