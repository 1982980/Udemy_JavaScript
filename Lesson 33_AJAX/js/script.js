"use strict";

const inputUsd = document.querySelector("#usd"),
  inputUah = document.querySelector("#uah");
inputUah.addEventListener("input", () => {
  const requestUah = new XMLHttpRequest();

  requestUah.open("GET", "js/current.json");
  requestUah.setRequestHeader(
    "Content-type",
    "application/json; charset=utf-8"
  );
  requestUah.send();

  requestUah.addEventListener("load", () => {
    if (requestUah.status === 200) {
      let data = JSON.parse(requestUah.response);
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Что пошло не так";
    }
  });
});

inputUsd.addEventListener("input", () => {
  const requestUsd = new XMLHttpRequest();

  requestUsd.open("GET", "js/current.json");
  requestUsd.setRequestHeader(
    "Content-type",
    "application/json; charset=utf-8"
  );
  requestUsd.send();

  requestUsd.addEventListener("load", () => {
    if (requestUsd.status === 200) {
      let data = JSON.parse(requestUsd.response);
      inputUah.value = (+inputUsd.value * data.current.usd).toFixed(2);
    } else {
      inputUah.value = "Don't work";
    }
  });
});
