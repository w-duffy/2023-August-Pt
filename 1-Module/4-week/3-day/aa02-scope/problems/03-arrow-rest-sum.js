/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the function to a variable using the const keyword and
arrow function syntax.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum("hi", 3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/

// Your code here

const arrowRestSum = (...array) => array.reduce((acc, num)=> acc + num) / array.length

// let arrowRestSum = (...nums) => {
//   let ans = nums.reduce((acc, num) => {
//     console.log(acc)
//     acc[num] = "some val"
// return acc
// }, {})
// return ans
// }
// // const arrowRestSum = (...nums) => nums.reduce((acc, num)=> acc + num)

console.log(arrowRestSum(3,5,6)); // => 14)
console.log(arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45)
console.log(arrowRestSum(0)); // => 0)
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
