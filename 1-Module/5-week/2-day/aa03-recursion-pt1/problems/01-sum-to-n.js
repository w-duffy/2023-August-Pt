/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
// let arr = [1,2,3]
let arr = []
// console.log("this works:", 10 + null)
function sumToN(n) {
  // if(n <= 0) return null;

  if (n === 1) return 1
  // base case
  let theStep = n - 1
  // console.log(n)
  // console.log(n -1)
  // let sum = n + sumToN(n - 1)
  // recursive step // n - 1
  // recursive case
  // return n + sumToN(theStep)
  let sum = n + sumToN(theStep)
return sum

}

// console.log(sumToN(3)) // returns 6 => 0 + 1 + 2 + 3
console.log(sumToN(5)) // returns 15 => 1 + 2 + 3 + 4 + 5
// console.log(sumToN(1))  // returns 1 === 1
// console.log(sumToN(9))  // returns 45 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
// console.log(sumToN(-8))  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
