//tabs

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
//   showTabContent(0);

//   tabsParent.addEventListener("click", (event) => {
//     const target = event.target;
//     if (target && target.classList.contains("tabheader__item")) {
//       tabs.forEach((item, i) => {
//         if (item == target) {
//           hideTabContent();
//           showTabContent(i);
//         }
//       });
//     }
//   });

//   //timer
//   let deadline = "2021-08-10";
//   function getTimeRemaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//       days = Math.floor(t / (1000 * 60 * 60 * 24)),
//       hours = Math.floor((t / (1000 * 60 * 60)) % 24),
//       minutes = Math.floor((t / (1000 * 60)) % 60),
//       seconds = Math.floor((t / 1000) % 60);

//     return {
//       total: t,
//       days: days,
//       hours: hours,
//       minutes: minutes,
//       seconds: seconds,
//     };
//   }

//   function getZero(num) {
//     if (num >= 0 && num < 10) {
//       return `0${num}`;
//     } else {
//       return num;
//     }
//   }

//   function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//       days = timer.querySelector("#days"),
//       hours = timer.querySelector("#hours"),
//       minutes = timer.querySelector("#minutes"),
//       seconds = timer.querySelector("#seconds"),
//       timeInterval = setInterval(updateClock, 1000);
//     updateClock();
//     function updateClock() {
//       const t = getTimeRemaining(endtime);
//       days.innerHTML = getZero(t.days);
//       hours.innerHTML = getZero(t.hours);
//       minutes.innerHTML = getZero(t.minutes);
//       seconds.innerHTML = getZero(t.seconds);
//       if (t.total <= 0) {
//         clearInterval(timeInterval);
//       }
//     }
//   }
//   setClock(".timer", deadline);

//   // Modal

//   const modalTrigger = document.querySelectorAll("[data-modal]"),
//     modal = document.querySelector(".modal"),
//     modalCloseBtn = document.querySelector("[data-close]");

//   function openModal() {
//     modal.classList.toggle("show");
//     document.body.style.overflow = "hidden";
//     //если пользователь вызвал модельное окно, отменяем вызов через время
//     clearInterval(modalTimerId);
//   }

//   function closeModal() {
//     //либо другой вариант, но нужно изменить класс в верстке
//     // modal.classList.add("hide");
//     // modal.classList.remove("show");
//     modal.classList.toggle("show");
//     document.body.style.overflow = "";
//   }
//   modalTrigger.forEach((btn) => {
//     btn.addEventListener("click", openModal);
//   });

//   modalCloseBtn.addEventListener("click", closeModal);

//   modal.addEventListener("click", (event) => {
//     if (event.target === modal) {
//       closeModal();
//     }
//   });

//   document.addEventListener("keydown", (e) => {
//     if (e.code === "Escape" && modal.classList.contains("show")) {
//       closeModal();
//     }
//   });

//   const modalTimerId = setTimeout(openModal, 5000);

//   function showModalShowByScroll() {
//     if (
//       window.pageYOffset + document.documentElement.clientHeight >=
//       document.documentElement.scrollHeight
//     ) {
//       openModal();
//       window.removeEventListener("scroll", showModalShowByScroll);
//     }
//   }

//   window.addEventListener("scroll", showModalShowByScroll);

//   //используем классы для создания карточек

//   class MenuCard {
//     constructor(alt, descriptor, parentSelector, price, src, title) {
//       this.alt = alt;
//       this.descriptor = descriptor;
//       this.parent = document.querySelector(parentSelector);
//       this.price = price;
//       this.src = src;
//       this.title = title;
//       this.currency = 27;
//       this.convertToUAH();
//     }

//     convertToUAH() {
//       this.price = this.price * this.currency;
//     }

//     render() {
//       const element = document.createElement("div");
//       element.innerHTML = `
//       <div class="menu__item">
//         <img src=${this.src} alt=${this.alt} />
//         <h3 class="menu__item-subtitle">${this.title}</h3>
//         <div class="menu__item-descr">
//           ${this.descriptor}
//         </div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//           <div class="menu__item-cost">Цена:</div>
//           <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//         </div>
//       </div>
//     `;
//       this.parent.append(element);
//     }
//   }

//   new MenuCard(
//     "vegy",
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     ".menu .container",
//     9,
//     "img/tabs/vegy.jpg",
//     'Меню "Фитнес"'
//   ).render();

//   new MenuCard(
//     "elite",
//     "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
//     ".menu .container",
//     10,
//     "img/tabs/elite.jpg",
//     "Меню “Премиум”"
//   ).render();

//   new MenuCard(
//     "post",
//     "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
//     ".menu .container",
//     14,
//     "img/tabs/post.jpg",
//     'Меню "Постное"'
//   ).render();
// });
//todo изучить DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  //Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer
  const deadline = '2021-09-10';

  function getTimeRemaining(endtime) {
    let T = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(T/1000*60*60*24),
      hours = Math.floor((T/1000*60*60) % 24),
      minutes = Math.floor((T/1000*60)),



  }
});
