// window.addEventListener("DOMContentLoaded", () => {
//   const tabs = document.querySelectorAll(".tabheader__item"),
//     tabsContent = document.querySelectorAll(".tabcontent"),
//     tabsParent = document.querySelector(".tabheader__items");

//   function hideTabContent() {
//     tabsContent.forEach((item) => {
//       item.classList.add("hide");
//       item.classList.remove("show", "fade");
//     });

//     tabs.forEach((item) => {
//       item.classList.remove("tabheader__item_active");
//     });
//   }

//   function showTabContent(i = 0) {
//     tabsContent[i].classList.add("show", "fade");
//     tabsContent[i].classList.remove("hide");
//     tabs[i].classList.add("tabheader__item_active");
//   }

//   hideTabContent();
//   showTabContent();
//   tabsParent.addEventListener("click", (event) => {
//     const target = event.target;
//     if (target && target.classList.contains("tabheader__item")) {
//       tabs.forEach((item, i) => {
//         if (target === item) {
//           hideTabContent();
//           showTabContent(i);
//         }
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabContents.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
      tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
      });
    });
  }

  function showTabContent(i = 0) {
    tabContents[i].classList.add("show", "fade");
    tabContents[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (item === target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer
  // const deadline = "2022-12-30";

  // function getTimeRemining(endTime) {
  //   const t = Date.parse(endTime) - new Date(),
  //     days = Math.floor(t / (1000 * 60 * 60 * 24)),
  //     minutes = Math.floor((t / (1000 * 60)) % 60),
  //     seconds = Math.floor((t / 1000) % 60);
  //   hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  //   return {
  //     total: t,
  //     days,
  //     hours,
  //     minutes,
  //     seconds,
  //   };
  // }

  // function addZeroToNumber(number) {
  //   if (number > 10) {
  //     return number;
  //   } else {
  //     return `0${number}`;
  //   }
  // }

  // function setTimer(selector, endTime) {
  //   const timer = document.querySelector(selector),
  //     days = timer.querySelector("#days"),
  //     hours = timer.querySelector("#hours"),
  //     minutes = timer.querySelector("#minutes"),
  //     seconds = timer.querySelector("#seconds");
  //   const timeInterval = setInterval(updateClock, 1000);

  //   function updateClock() {
  //     const t = getTimeRemining(deadline);
  //     days.innerHTML = addZeroToNumber(t.days);
  //     hours.innerHTML = addZeroToNumber(t.hours);
  //     minutes.innerHTML = addZeroToNumber(t.minutes);
  //     seconds.innerHTML = addZeroToNumber(t.seconds);

  //     if (t.total <= 0) {
  //       clearInterval(timeInterval);
  //     }
  //   }
  // }
  // setTimer(".timer", deadline);

  const deadLine = "2022-12-30";

  function getTimeRemining(endTime) {
    let days, hours, minutes, seconds;
    const diffTime = Date.parse(endTime) - new Date();
    if (diffTime <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(diffTime / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((diffTime / (1000 * 60)) % 60)),
        (seconds = Math.floor((diffTime / 1000) % 60));
    }
    return {
      total: diffTime,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function addZeroToNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setTimer(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      hours = timer.querySelector("#hours"),
      timerInterval = setInterval(updateTimer, 1000);
    function updateTimer() {
      const time = getTimeRemining(endTime);
      days.innerHTML = addZeroToNumber(time.days);
      hours.innerHTML = addZeroToNumber(time.hours);
      minutes.innerHTML = addZeroToNumber(time.minutes);
      seconds.innerHTML = addZeroToNumber(time.seconds);

      if (time.total <= 0) {
        clearInterval(timerInterval);
      }
    }
  }
  setTimer(".timer", deadLine);
});
