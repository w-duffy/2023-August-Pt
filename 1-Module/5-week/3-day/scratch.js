/*Solve this problem using recursion
Avg Val
Write a function avgVal(arr)
that accepts an array as an arg.
The function should return the average of
all values in the array. If the array is empty,
it should return null.
*/

//Callback
function avgVal(arr, callback) {
  if (arr.length === 0) return null;

  const sum = callback(arr, 0);
  return sum / arr.length;
}

function recursiveSum(arr, index) {
  if (index === arr.length) return 0;
  return arr[index] + recursiveSum(arr, index + 1);
}


console.log(avgVal([5, 10], recursiveSum)); // 7.5
console.log(avgVal([3, 7, 2, 1, 2], recursiveSum)); // 3
console.log(avgVal([], recursiveSum)); // null


// function avgVal(arr) {
//   if (!arr.length) return null;

//   function mySumHelper(arr, i) {
//     //basecase
//     if (arr.length === i) {
//       return 0;
//     }
//     //recursive step
//     //recursive case
//     return arr[i] + mySumHelper(arr, i + 1);
//   }

//   return mySumHelper(arr, 0) / arr.length;
// }

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// function avgVal(arr, idx = 0, sum = 0) {
//   if (idx === arr.length) {
//       if (arr.length === 0) {
//           return null;
//       }
//       return sum / arr.length;
//   }

//   return avgVal(arr, idx + 1, sum + arr[idx]);
// }

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// function multiply(a, b) {

//     return a * b;
// }

// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5, 2));
// console.log(multiply(5));

// const range = (start, end) => {
//     if (start === end) return [];
//     return [start, ...range(start + 1, end)];
//   };

// const range = (start, end, arr = []) => {

//   if (start === end) return arr;
//   arr.push(start);
//   console.log("ARR", arr)
//   return range(start + 1, end, arr);
// };

// console.log(range(4, 7));
