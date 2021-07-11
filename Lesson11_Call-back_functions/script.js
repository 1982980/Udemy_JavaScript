function makeFirst() {
  setTimeout(
    //Do something
    function () {
      console.log(1);
    },
    500
  );
}

function makeSecond() {
  console.log(2);
}

makeFirst();
makeSecond();

function learnJS(lang, callback) {
  console.log(`Я изучаю ${lang}`);
  callback();
}

// learnJS ('JavaScript', function () {
//   console.log("Я прошел этот урок");
// })

function done() {
  console.log("Я прошел этот урок");
}
learnJS("Js", done);
