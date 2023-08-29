// let wordArr = ["do", "re"];


// let someString = "cool"
// // let numArr = [1, 2, 3];

// let myFunc = function (param) {

//   for (let i = 0; i < param.length; i++) {
//     // console.log(param[i])
//       if (param[i] === "o") {
//           console.log("Here")
//     }

//   }

// };

// myFunc(someString)
// console.log("hello")
// console.log(myFunc(wordArr));

// let somethingGotReturned = myFunc(someString);

// // console.log("WHAT IS THIS VALUE: ", somethingGotReturned);


// // console.log(myFunc(someString));




// let arr = ["a", 2]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// console.log(arr[0])

// let twoDimArray = [[6, 2], [7, 4], [2]];

// let myTwoDimFunc = function (param) {

//   for (let i = 0; i < param.length; i++) {
//     // console.log(param[i])
//     let outerEl = param[i]


//     for (let j = 0; j < outerEl.length; j++){

//         if (outerEl[j] > 5){
//             console.log(outerEl[j])
//         }
//     }

//   }

// };

// myTwoDimFunc(twoDimArray);

// //Remove Last Vowel Recall
// // Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

// let removeLastVowel = function (word) {

// let vowels = "aeiou";

// let answerStr = "";

// for(let i = word.length - 1; i >= 0; i--){

//     let currLetter = word[i]

//     if(vowels.includes(currLetter)){

//         let startOfWord = word.slice(0, i);
//         // console.log("start:", startOfWord)

//         let endOfWord = word.slice(i + 1)
//         // console.log("end:", endOfWord)

//         answerStr += startOfWord + endOfWord

//         return answerStr
//     }
// }
// // return word;

// // let arr = [1, 2, 3, 6]
// let arr = ["hi", "ashley"]

// // console.log(arr[1])



// let wordArr = ["hi", ["hi", "ashley"]]
// // console.log(wordArr[0])
// let nestedArr = wordArr[1]
// console.log("nested arr:", nestedArr[1])

// }
// // we normally start at 0 and end at length -1
// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'


// Two Dimensional Sum
// Write a function twoDimensionalSum(arr) that takes in a 2D
//array of numbers and returns the total sum of all numbers.

// let twoDimensionalSum = function (arr){
// //     // console.log("checking", arr)
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){

//         let nestedArr = arr[i]

//         for (let j = 0; j < arr[i].length; j++){

//             let num = nestedArr[j];


//             sum += num;

//         }
//     }

// return sum
// }

// // let classEx = [1, 2]

// let arr1 = [
//     [1, 3],
//     [-4, 7, 10],
//     [2]
// ];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [
//     [],
//     [3, 1, 2],
// ];
// console.log(twoDimensionalSum(arr2)); // 6


// your code here



// Least Common Multiple
// Write a function leastCommonMultiple(num1, num2)
// that accepts two numbers as arguments. The functions should return
//the smallest number that is divisible by both num1 and num2.

// let leastCommonMultiple = function(num1, num2){
//     // console.log(num1, num2)
//     // let gcm = num
//     for (let i = num1; i <= (num1 * num2); i++ ){
//         console.log(i)
//         // if (i % num1 === 0 && i % num2 === 0){
//             // return i
//         // }
//     }


// }

// console.log(leastCommonMultiple(4, 6)); // 12
// console.log(leastCommonMultiple(3, 5)); // 15
// console.log(leastCommonMultiple(2, 10)); // 10



// Two Dimensional Sum
// Write a function twoDimensionalSum(arr) that takes
//in a 2D array of numbers and returns the total sum of all numbers.

// let twoDimensionalSum = function(arr){

//     let sum = 0;
// // let sum;
// for (let i = 0; i < arr.length; i++) {
//     let sum = 0
//     console.log("did i run")
//     let nestedArr = arr[i];

//     for (let j = 0; j < nestedArr.length; j++){
//         console.log("In nested:  ", nestedArr[j])

//         sum += nestedArr[j]
//     }
//     return sum
// }
// }


// let arr1 = [
//     [1, 3],
//     [-4, 7, 10],
//     [2]
// ];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [
//     [],
//     [3, 1, 2],
// ];
// console.log(twoDimensionalSum(arr2)); // 6

/*


Pig Latin Recall
Pig Latin is a fun take on the English language where you move
any consonant cluster from the start of the word to the end of the word;
when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates
the word into Pig Latin. For this problem use the String's slice() method.
The slice() method extracts a section of a string and returns it as a string.

Hint: Remember the String.includes method!
*/

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    // console.log(word)
    let vowels = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < word.length; i++){

        let letter = word[i]
        // console.log("letter: ", letter)
        if(i === 0) {
            if(vowels.includes(letter)){
                // console.log("testing", letter)
                return word + "yay"
            }
        }

        if(vowels.includes(letter)){
            // console.log("2: ", letter)
            let firstChunk = word.slice(0, i)
            let secondChunk = word.slice(i, word.length)
            // console.log("1: ", i, firstChunk)
            // console.log("2: ", i, secondChunk)
            return secondChunk + firstChunk + "ay"
            // console.log(word)
        }
    }


    //if word starts with non-vowel slice all letters up to the vowel,
    //put the sliced chunk at the end + "ay"

  };



  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
