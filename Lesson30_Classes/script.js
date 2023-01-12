/*
"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  // буду использовать наследование из предыдущего класса '...extends Rectangle'
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, "Hello world", "red");
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(square.calcArea());
// console.log(long.calcArea());
*/

"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    document.querySelector(".rectangle").append.this;
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

// const square = new Rectangle(10, 10);
// const longSquare = new Rectangle(20, 100);
// console.log(square.calcArea());
// console.log(longSquare.calcArea());

const div = new ColoredRectangleWithText(25, 10, "Hello world", "red");
div.showMyProps();
console.log(div.calcArea());

function setOptions(height, width, ...additional) {
  console.log(height, width, ...additional);
}
setOptions(400, 500, "red", "top");

class ClockNew {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }

  stop() {
    clearInterval(timer);
  }

  start() {
    this.render();
    this.timer = setInterval(()=>this.render(), 1000);
  }
}

new ClockNew({ template: "h:m:s" }).start();
