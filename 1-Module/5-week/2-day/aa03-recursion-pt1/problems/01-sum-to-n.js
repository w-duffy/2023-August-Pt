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


function sumToN(n) {
  // Your code here
  if(n < 0) return null


  // base case
  if (n <= 0) return 0

// recursive step
//recursive case
// console.log("HERE 0", n)
let sum = n + sumToN(n - 1)


return sum


}

console.log(sumToN(5)) // returns 15 => 1 + 2 + 3
// console.log(sumToN(1))  // returns 1 === 1
// console.log(sumToN(9))  // returns 45 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
// console.log(sumToN(-8))  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
