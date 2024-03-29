//touchstart
//touchenter
//touchleave

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  box.addEventListener("touchstart", (e) => {
    e.preventDefault();
    console.log("Start");
    console.log(e.targetTouches);
  });

  box.addEventListener("touchmove", (e) => {
    e.preventDefault();
    console.log("Move");
    console.log(e.targetTouches[0].pageX);
  });

  box.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("End");
    console.log(e.touches);
  });
});

//  touches показывает сколько одновременных касаний  в моменте
// targetTouches
// changedTouches
