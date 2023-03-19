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

  const deadLine = "2023-05-30";

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

  //Modal window
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modalClose = document.querySelector("[data-close]"),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    // clearInterval(modalTimer);
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modalClose.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
  // const modalTimer = setInterval(openModal, 3000); //! закомментировал чтобы не показывать модальное окно каждые 3 секунды

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  // Classes for cards

  class CardMenu {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.cur = 41;
      this.parent = document.querySelector(parentSelector);
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.cur;
    }
    render() {
      const element = document.createElement("div");
      element.innerHTML = `<div class="menu__item">
      <img src=${this.src} alt=${this.alt} />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
      </div>
    </div>`;
      this.parent.append(element);
    }
  }
  //? Классический вариант создания объекта из класса, для этого объекта сохраняются ссылки на объект
  const newCard = new CardMenu(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    12,
    ".menu .container"
  );

  newCard.render();

  //? Упрощенный вариант создания объекта класса, ссылки на который нигде не хранятся
  new CardMenu(
    "img/tabs/elite.jpg",
    "elite",
    'Меню "Премиум"',
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    19,
    ".menu .container"
  ).render();

  new CardMenu(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    15,
    ".menu .container"
  ).render();
});

//
// function Clock({ template }) {

//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();
