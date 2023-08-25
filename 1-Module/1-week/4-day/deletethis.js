function isOdd(number) {
    return (number % 2 !== 0);
  }


  
  function isOddConditional(number) {
    if (number % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  }


  function logBetweenWhile(lowNum, highNum) {
    let i = lowNum;
    while (i <= highNum) {
      console.log(i);
      i++;
    }
  }

  function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i += 1) {
      console.log(i);
    }
  }
