function buyPizza(price, amount, ...rest) {
  console.log(price); // 500

  console.log(...rest);

  // Array(4) [ 3, 10, 6, 20 ]
  console.log(price, amount, ...rest); //тут вызываем массив rest со spread оператором, поэтому он будут показан не как массив, а как строка/список
}

buyPizza(500, 3, 10, 6, 20);
