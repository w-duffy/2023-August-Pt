// let myIndexCustomOf = function(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i];
//         if (target === el) {
//             return i
//         }
//     }
//     return -1;
// };


// let arr = ["dog", "cat"]



// // console.log(arr.indexOf("cat"))

// let newArr = [1, 2, 3]
// // let newArr2 = [4,5,6]
// // let newArr3 = [7,8,9]

// function sumArray(array) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i += 1) {
//       let num = array[i];
//       sum += num;
//     }

//     return sum;
//   }

// let my2dArr = [[1, 2], [3]]


// let sum2dArray = function (twoDArray){

//     let sum = 0;
//     for (let i = 0; i < twoDArray.length; i++){
//         let innerArr = twoDArray[i];
//         // console.log("1: ", innerArr)

//         sum += sumArray(innerArr)
//     }
//     return sum
// }
// console.log(sum2dArray(my2dArr))





// your code here



// let usingHelper = function(array, target){


//     let myVar = myIndexCustomOf(array, target)
// if(myVar === -1){
//     return "hey that wasn't found"
// }
//     return "that's a legit index"
// }

// console.log(usingHelper(arr, "yyy"))



// let arr = [1, 2, "hi", ["nested", "arr"]]




/*
Two Dimensional Product
Write a function twoDimensionalProduct(array) that takes in a 2D array
of numbers as an argument. The function should return the total
product of all numbers multiplied together.
*/
// let arr = [1,2 ]

// let multiplierFunc = function (arr){
//     let product = 1;

//     for (let i = 0; i < arr.length;  i++){
//         product *= arr[i]
//     }
//     return product
// }
// console.log(multiplierFunc([6, 4]))
// console.log(multiplierFunc([5]))
// console.log(multiplierFunc([3, 1]))
// console.log("HERE", product)

// let twoDimensionalProduct = function (twoDimArray){

//     let productTotal = 1;

//     for (let i = 0; i < twoDimArray.length;  i++){
//         productTotal *= multiplierFunc(twoDimArray[i])
//     }
//     //return total of all nested elements mulitplied together

//     return productTotal

// }

// let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//     [11, 4],
//     [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88





// your code here
/*
Longest Word
Write a function longestWord(sentence) that takes in a sentence string as an argument.
// The function should return the longest word in the sentence.
// If there is more than one "longest word", return the first of these instances.
// */

// // Andrew's helper func
// let howLong = function(word){
//     let letterCount = 0;
//     for (let i = 0; i < word.length; i++){
//         //count each letter and add them up
//         letterCount++
//     }
//     return letterCount
// }

// let longestWord = function (sentence){
//     // need to split up words
//     let wordCheck = sentence.split(" ");
//     let longestWord = "";

//     //look at each word
//     let currCount = 0;

//     for(let i = 0; i < wordCheck.length; i++){
//         // console.log(wordCheck[i])

//         // this will give num of letters
//         let thisWord = howLong(wordCheck[i]);

//         if(thisWord > currCount){
//             currCount = thisWord;
//             longestWord = wordCheck[i]
//         }
//     }

//     // return longest word
//     return answerIndex
// }

// let longestWord = function(sentence) {
//     let words = sentence.split(' ');
//     let longestWord = '';

//     // let index = 0

//     for(let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if(word.length > longestWord.length) {
//             longestWord = word;
//             index = i
//         }
//     }

//     // return index;
//     // let longestWord
//     // return `The longest word is: ${longestWord}.  The index is this: ${words.indexOf(longestWord)}`
// };

//testing

//an update

// console.log(longestWord('where did everyone go')); // 'everyone' 2
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity' 1
// console.log(longestWord('')); // ''
/*
Uncompress
Write a function uncompress(str) that takes in a "compressed" string as an arg.
A compressed string consists of a character immediately followed
by the number of times it appears in the "uncompressed" form.
The function should return the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type.
// For example. Number("4") // => 4
*/


// let uncompress = function (str) {

//     let answerStr = "";

// let numArr = []
// let strArr = []
//     //Add to answer to string += "somestr"
// for (let i = 0; i < str.length; i+=2) {
//     let letter = str[i]
//     strArr.push(letter)
//     // let num = str[i + 1]
//     // console.log("MY FLAG", letter)
// }

// // for (let i = 1; i < str.length; i+=2){
// //     let num = str[i]
// //     // console.log("NUM", num)
// //     numArr.push(num)
// //     // let num = str[i + 1]
// //     // console.log(letter, num)
// // }
// // console.log(numArr, strArr)


// // for(let i =0; i< numArr.length; i++){
// //     let finalNum = Number(numArr[i])
// //     // console.log(finalNum)
// //     let finalLetter = strArr[i]
// //     // console.log(finalNum, finalLetter)
// //     for (let j = 0; j < finalNum; j++){
// //         // console.log(finalLetter)
// //         answerStr+= finalLetter
// //     }
// // }
// // // console.log(numArr, strArr)
// // //return the uncompresssed v string
// // return answerStr
// // }



// // console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// // console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// // console.log(uncompress('b1o2t1')); // 'boot'









// /*
// Two Dimensional Product
// Write a function twoDimensionalProduct(array) that takes in a 2D array of
// numbers as an argument. The function should return the total product of all
// numbers multiplied together.
// */
// let testArr = [6, 4]
// let testArr2 = [5]
// let testArr3 = [3, 1]

// let helperProductFunc = function(arr){
//     let sum = 1;

//     for (let i = 0; i < arr.length; i += 1) {
//       let num = arr[i];
//       sum *= num;
//     }

//     return sum;
// }



// let twoDimensionalProduct = function(twoDArray){
//     let product = 1;

//     for (let i = 0; i < twoDArray.length; i++){

//         let innerArr = twoDArray[i]
//         let innerProductVal = helperProductFunc(innerArr)
//         product *= innerProductVal

//     }
//     return product
// }

// let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//     [11, 4],
//     [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88



// your code here

// Longest Word
// Write a function longestWord(sentence) that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is more than one "longest word", return the first of these instances.


// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''





/*Product Array
Write a function product(nums) that takes in an array of numbers.

The function should return the total product of multiplying all numbers of the array together.
You can assume that nums will not be an empty array.
*/

// function product(nums){

//     let product = 1;

//     for (let i = 0; i < nums.length; i++){
//         product *= nums[i]
//     }
//     return product
// }


// console.log(product([10, 3, 5, 2])); // 300
// console.log(product([4, 3])); // 12

/*
Longest Word
Write a function longestWord(sentence) that takes in a sentence string as an argument.
The function should return the longest word in the sentence. If there is more than one "longest word",
return the first of these instances.
*/

// let longestWord = function (sentence){
//     let words = sentence.split(" ")

//     let longestWord = ""

//     let index = 0;

//     for (let i = 0; i < words.length; i++){
//         let word = words[i];

//         if(word.length > words[index].length){
//             // longestWord = word;
//             index = i;
//         }
//     }

//     // return words.indexOf(longestWord)
//     return index
// }

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// // console.log(longestWord('')); // ''


/*
Choose Primes
Write a function choosePrimes(nums) that takes in an array of numbers as args.
The function should return a new array containing the primes from the original array.
A prime number is a number that is only divisible by 1 and itself.
Hint: consider
creating a helper function to check if a number is prime!
*/
console.log(5 % 5)
let isPrime = function(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let choosePrimes = function(nums){

    // decalre a new arr
    let newArr = [];
    //go through original array
for (let i = 0; i < nums.length; i++){
    let num = nums[i]
//   console.log(num)
let returnValOfHelper = isPrime(num)
  if(returnValOfHelper){
    newArr.push(num)
  }
}    //return a new arr
    return newArr

}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
