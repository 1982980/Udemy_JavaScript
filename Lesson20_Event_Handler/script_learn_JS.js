const btnHide = document.querySelector(".btnHide"),
  btnShow = document.querySelector(".btnShow"),
  btnToggle = document.querySelector(".btnToggle");
/*
function hiddenButton() {
  this.hidden = true;
  console.log("Work");
}
function showButton() {
  btnHide.hidden = false;
  console.log("Work again");
}
btnHide.addEventListener("click", hiddenButton);
btnShow.addEventListener("click", showButton);
*/

/*
function turnOnButton() {
  btnHide.hidden = true;
  this.removeEventListener("click", turnOnButton);
  this.addEventListener("click", turnOffButton);
}
function turnOffButton() {
  btnHide.hidden = false;
  this.removeEventListener("click", turnOffButton);
  this.addEventListener("click", turnOnButton);
}
btnToggle.addEventListener("click", turnOnButton);
*/
const list = document.querySelectorAll(".b"),
  btn = document.querySelector(".a");

function toggleListOff() {
  list.forEach((e) => (e.hidden = true));
  btn.removeEventListener("click", toggleListOff);
  btn.addEventListener("click", toggleListOn);
}
function toggleListOn() {
  list.forEach((e) => (e.hidden = false));
  btn.removeEventListener("click", toggleListOn);
  btn.addEventListener("click", toggleListOff);
}
btn.addEventListener("click", toggleListOff);
