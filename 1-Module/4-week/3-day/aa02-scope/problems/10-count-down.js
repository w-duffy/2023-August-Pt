/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:


***********************************************************************/

// Your code here

//return a function in a func

// innner returns happy new year or a function

let countDownTimer = function (n) {
  if (n === 0) {
    return "Happy New Year!";
  }

  let randomVar = () => {
    n--;
    if (n === 0) {
      return "Happy New Year!";
    } else{
      return someLogicThing = () =>{

        //find the day of the year
      }
    }

  };

  return randomVar;
};



let threeDays = countDownTimer(3); // returns a function
let someLogicThing = threeDays()
console.log(someLogicThing) // yundefined
// console.log(threeDays()); // returns a function
// console.log(threeDays()); // returns a function
// console.log(threeDays()); // returns a function

// let nestedStuff = threeDays()
// console.log("NESTED", nestedStuff())

// console.log("10: ", threeDays()); // returns a function
// console.log("11: ", threeDays()); // prints "Happy New Year!"

// // }
// console.log("1: ", countDownTimer(0)); // prints "Happy New Year!"

//   let oneDay = countDownTimer(1); // returns a function
//   console.log("2: ", oneDay()); // prints "Happy New Year!"

// let twoDays = countDownTimer(2); // returns a function
// console.log(twoDays()); // returns a function
// console.log(twoDays()); // prints "Happy New Year!"


// let fbLikes = (numOfLikes) => {
//   return () => {
//     numOfLikes++;
//     return numOfLikes;
//   };
// };
// let willLike = fbLikes(4); // returns a function
// console.log(willLike()); // returns a function
// console.log(willLike()); // returns a function
// console.log(willLike()); // returns a function
// // let eliLake = countDownTimer(4); // returns a function
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
