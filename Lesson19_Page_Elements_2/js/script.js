"use strict";
//подготовил переменные для работы
const box = document.getElementById("box"), //получил один элемент по id, как правило такой элемент один на странице
  btns = document.getElementsByTagName("button"), //получил html-коллекцию(псевдо-массив) элементов по тегу
  circles = document.getElementsByClassName("circle"), //получил html-коллекцию (псевдо-массив) элементов по классу
  hearts = document.querySelectorAll(".heart"), //получил нод-лист элементов (псевдо-массив с методом forEach()) по css-селектру
  oneHeart = document.querySelector(".heart"), //получил один первый элемент по css-селектору
  wrapper = document.querySelector(".wrapper"); //получил один первый элемент по css-селектору

// box.style.backgroundColor = "blue";//*передаю строкой css-свойство используя синтаксис CSS
// box.style.width = "500px";//*передаю строкой css-свойство используя синтаксис CSS
box.style.cssText = "backgroung-color: green; width: 300px"; //*передаю строкой свойство css используя синтаксис CSS и через ; добавляю любое количество свойств CSS

btns[1].style.borderRadius = "100%"; //*передаю строкой свойство css используя синтаксис CSS
circles[0].style.backgroundColor = "red"; //*передаю строкой свойство css используя синтаксис CSS

/*для того чтобы изменить много элементов страницы, я нахожу по классу/идентификатору/тегу/селектору и получаю псевдомассив который могу перебрать с помощью цикла (for, for-of)*/
// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// } //* перебираю все элементы псевдо-массива обычным циклом

//* если использовать метод querySelectorAll(), то можно использовать метод forEach() для перебора Node-list псевдо-массива. Это возможно только с querySelectorAll()!!!
hearts.forEach((item) => (item.style.backgroundColor = "green"));
//! все стили элементов в вышеизложенных примерах добавляются на страницу, как инлайн-стили(всроиные стили <h1 style="color:red; font-size:30px;">)
// создание элементов с помощью JS

const div = document.createElement("div"); //*создали элемент "div"
// const text = document.createTextNode("Тут был я");//*создали текстовый узел, то есть добавить только текст

//для того чтобы изменить или добавить свойства стилей для нескольких элементов, чаще всего изменяют CSS стили, без создания инлайн-стилей

//* свойство classList - содержит псевдомассив CSS классов элемента, а также позволяет добавлять и удалять классы элемента, проверять наличие определенного класса среди классов элемента.
/* методы свойства classList:
add - добавляет заданный класс
remove - удаляет заданный класс
contains - проверяет заданный класс
toggle - чередует/переключает заданный класс
*/
div.classList.add("black"); //*элементу div добавили класс black

// document.body.append(div); //*добавили элемент div в конце элемента body, который в document
// document.body.appendChild();

//если какой-то элемент будет использован только 1 раз то не нужно для него создавать новую переменную. можно найти элемент с помощью методов объекта document и в той же строке добавить необходимый элемент или свойство.
// document.querySelector(".wrapper").append(div);
wrapper.append(div); //* метод "append()" добавляет элемент в конце родительского элемента
// wrapper.appendChild(div);//* тот же метод, но устаревший

// wrapper.prepend(div); //* метод "prepend()"добавляет элемент в начале родительского элемента

// hearts[0].before(div); //*добавляет элемент(div) перед элементом(hearts[0])
// hearts[2].after(div); //*добавляет элемент (div) после элемента (hearts[2])

// circles[0].remove();//* удаляет указанный элемент (circles[0]) со страницы
// wrapper.removeChild(hearts[1]); //* устаревший метод. Указываем родителя (wrapper) и даем команду удалить потомка с указанием потомка(hearts[1])

// hearts[0].replaceWith(circles[0]);//* заменяет определенный элемент (hearts[0]) на другой элемент (circles[0]). Элемент который заменили удаляется
// wrapper.replaceChild(circles[0], hearts[0]); //* устаревший метод. Заменяет 2-й аргумент (hearts[0]) на 1-й аргумент (circles[0])

// wrapper.insertBefore(div, hearts[]); //* устаревший метод, который добавляет элемент - первый аргумент метода (div), перед нужным элементом - второй аргумент (hearts[0])

//?передача в HTML страницу. Эти методы позволяют добавлять на страницу любой контент и создавать страницы динамически

div.innerHTML = "<h1>Hello world</h1>"; //* передал на страницу заголовок. Этот метод позволяет добавлять на страницу любой контент, в том числе и HTML код

div.textContent = "hello world again";//* Этот метод добавляет только текстовый контент на страницу

div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");//* этот метод вставляет в указанное место строку как код HTML или XML. Принимает два параметра. Первый это положение относительно вызвавшего метод элемента, второй - строка, как код HTML или XML. 'beforebegin': до самого element (до открывающего тега),'afterbegin': сразу после открывающего тега element (перед первым потомком),'beforeend': сразу перед закрывающим тегом element (после последнего потомка),'afterend': после element (после закрывающего тега)
