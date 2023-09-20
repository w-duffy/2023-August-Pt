/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  // Your code here

  //base case
  // if(arr.length === 0) return 0
  // if(!arr.length) return 0
  if(arr.length === 1) return arr[0]

  //recursive step
  let num = arr.pop()

  //recursive case
  // console.log(arr)
let answer = num + sumArray(arr)

  return answer


}
console.log(sumArray([1, 2, 3])); //  6
// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
