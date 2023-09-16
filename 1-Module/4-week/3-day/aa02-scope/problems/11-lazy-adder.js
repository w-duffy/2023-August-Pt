/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and returns a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/
//Jacob's solution

// const lazyAdder = (firstNum) => (secondNum) => (thirdNum) => firstNum + secondNum + thirdNum


let lazyAdder = (firstNum) =>{

// .map(el=>{

// })
  return secondNum => {


    return (thirdNum) => {
    //   console.log("1: ", firstNum)
    //   console.log("here", secondNum)
    // console.log("2", thirdNum)
    //return number
    return firstNum + secondNum + thirdNum

  }
}


}



let firstAdd = lazyAdder(1);

let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6


let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33








// Your code here
//Max's solution
// let lazyAdder = firstNum => secondNum => thirdNum => firstNum + secondNum + thirdNum;

// let anonFunc = singleParam => "hi"

// let lazyAdder = (firstNum) =>{
//   //returns a function


//   // console.log("1", firstNum)
//   return (secondNum) =>{
//     //innerfunc returns a func
//     // console.log("2", secondNum)
//     //mostnestedFun return a number
//     return (thirdNum) =>{
//       // console.log("3", thirdNum)
//       //need logic in here
//       return firstNum + secondNum + thirdNum
//     }
//   }
// }



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
