/*
Syntax
The syntax for Array.splice is as follows:


array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

start: The index at which to start changing the array.
deleteCount (Optional): The number of elements to remove.
If deleteCount is omitted, all elements from start to the end of the array are removed.
item1, item2, ... (Optional): The elements to add to the array, starting from the start position.
*/

// const arr = [1, 2, 3, 4, 5];
// const removed = arr.splice(1, 2);

// console.log("1:", arr) // [1,4,5]
// console.log("2:", removed) //[2,3]

// const months = ['Jan', 'March', 'April', 'June'];
// let returnVal = months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log("what will print here:", months);
// console.log("return val: ", returnVal);

// months.splice(4, 1, 'May');
// Replaces 1 element at index 4
// console.log(months);

// const str = 'The cool dog barked';

// const words = str.split("o");
// console.log(words);

//[ 'The c', '', 'l d', 'g' ]

// Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// let str = 'dog cat mouse';
// // str = "taco burrito"

// console.log(str.split(" ").join(" test "))
// // console.log("SPLIT: ", words);
// let varE = words.join(" ")

// console.log(varE)
//"fire,air,water"

// your code here

// Tripler
// Write a function tripler(nums) that takes in an array as an arg.
// The function should return a new array containing three
//times every number of the original array.

// let tripler = function(nums){
//     let newArr = [];  //MAJOR KEY ALER
//     // console.log(nums)

//     //do something to each element forwward or backwards
//     for (let i = 0; i < nums.length; i++){

//         newArr.push(nums[i] * 3)
//     };

//     //return newArr
//     return newArr
// }

// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

// Avg Val
// Write a function avgVal(arr) that accepts an array as an arg.
// The function should return the average of all values in the array.
// If the array is empty, it should return null.

// let avgVal = function(arr){
// if(arr.length === 0){
//     return null;
// }

// //knew we needed an avg, which means add all nums in arr

// let sum = 0;

// //go through all vals in arr
// for (let i = 0; i < arr.length; i++){

//     sum += arr[i];
// };

// // console.log("sum check", sum)

// return sum / arr.length
// return 7.5

// }

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// your code here

// Max Value
// Write a function maxValue(nums) that takes in an array of numbers as an arg.
// The function should return the largest number of the array.
// If the array is empty, the function should return null.

// your code here

// let maxValue = function (nums){

//     //if arr empty return null

//     if (nums.length === 0) {
//         return null
//     }

//     let largest = nums[0];

//     for(let i = 0; i < nums.length; i++){
//         let currNum = nums[i]
//         // console.log(currNum)
//         if (currNum > largest){
//             largest = currNum
//         }

//     }

//     //return the largest num of the arr
//     return largest
// }

// // console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxValue([-2, -3, -7, -3 ])); // !3 actually -2
// // console.log(maxValue([])); // null

// Write a function avgVal(arr) that accepts an array as an arg.
// The function should return the average of all values in the array.
// If the array is empty, it should return null.

//add all num so delcare a sum var

// function avgVal(arr){

//     if(arr.length === 0) {
//         return null
//     }

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     // console.log("SUM", sum)
//     return sum / (arr.length)
// }

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// Max Value
// Write a function maxValue(nums) that takes in an array of numbers as an arg.
//The function should return the largest number of the array. If the array is empty,
//the function should return null.
// your code here

let maxValue = function (nums) {

    if(nums.length === 0) return null

  let max = nums[0];


  for (let i = 0; i < nums.length; i++) {

    let number = nums[i];

    if (number > max) {
      max = number;
    }
  }

  return max;
};

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null
