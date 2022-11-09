// const btn = document.querySelector(".btn");
// // let timerId,
// //   i = 0;

// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos === 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = `${pos}px`;
//       elem.style.left = `${pos}px`;
//     }
//   }
// }
// btn.addEventListener("click", myAnimation);

// // function logger() {
// //   if (i === 3) {
// //     clearInterval(timerId);
// //   }
// //   console.log("text");
// //   i++;
// // }

// let id = setTimeout(function log(){
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);

const btn = document.querySelector(".btn");
let timerTest,
  i = 0;

function myAnimation(){
  const elem = document.querySelector(".box");
  let position = 0;
  const id = setInterval(frame, 10);
  function frame (){
    if(position == 300){
      clearInterval();
    } else {
      position++;
      elem.style.top = position + 'px';
      elem.style.left = position + 'px';
    }
  }
}
btn.addEventListener("click", myAnimation
  // let timerTest = setTimeout(logger, 2000);
  // timerTest = setInterval(logger, 2000);
);

// const timerId = setTimeout(
//   function (text) {
//     console.log(text);
//   },
//   2000,
//   "Hello"
// );

// function logger() {
//   if (i === 3) {
//     clearInterval(timerTest);
//   }
//   console.log("text");
//   i++;
// }

//todo если сохранять setTimeout через переменную то этот таймер сохранится с уникальным идентификатором, по которому мы можем этот таймер отключить или включить

// let id = setTimeout(function log(){
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);


