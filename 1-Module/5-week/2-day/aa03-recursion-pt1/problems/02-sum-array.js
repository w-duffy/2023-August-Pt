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


  //base case
  if(arr.length === 1) return arr[0]

  //recursive step
  let popped = arr.pop()

  //recursive case/call
  let sum = popped + sumArray(arr)
  return sum

}

console.log(sumArray([35])); //  35
// console.log(sumArray([35, 2])); //  3
// console.log(sumArray([1, 2, 3])); //  6



// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
