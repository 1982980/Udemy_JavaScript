function printNumbers(from, to){
  let i = from;
  let timerId = setInterval(()=>{
    if(i < to){
      console.log(i);
    }
    i++;
  }, 1000);
}

printNumbers(1,5);