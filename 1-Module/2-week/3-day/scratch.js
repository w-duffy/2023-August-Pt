// let myIndexCustomOf = function(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i];
//         if (target === el) {
//             console.log("HERE")
//             return i
//         }
//     }
//     return -1;
// };



// myIndexCustomOf(["not hi", "hi"], "hi")



// let usingHelper = function(array, target){


//     let imTheSavedReturnFromThisFunc = myIndexCustomOf(["not hi", "hi"], "hi")
//     let newVar = (1 + 2)
//     console.log(newVar)


//     console.log("2: here's the index: ", imTheSavedReturnFromThisFunc)

// }

// let arr = [1, 2, "hi", ["nested", "arr"]]

// usingHelper(arr, "hi")



/*
Two Dimensional Product
Write a function twoDimensionalProduct(array) that takes in a 2D array
of numbers as an argument. The function should return the total
product of all numbers multiplied together.
*/
// let arr = [1,2 ]

let multiplierFunc = function (arr){
    let product = 1;

    for (let i = 0; i < arr.length;  i++){
        product *= arr[i]
    }
    return product
}
// console.log(multiplierFunc([6, 4]))
// console.log(multiplierFunc([5]))
// console.log(multiplierFunc([3, 1]))
// console.log("HERE", product)

let twoDimensionalProduct = function (twoDimArray){

    let productTotal = 1;

    for (let i = 0; i < twoDimArray.length;  i++){
        productTotal *= multiplierFunc(twoDimArray[i])
    }
    //return total of all nested elements mulitplied together

    return productTotal

}

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
The function should return the longest word in the sentence.
If there is more than one "longest word", return the first of these instances.
*/

//Andrew's helper func
let howLong = function(word){
    let letterCount = 0;
    for (let i = 0; i < word.length; i++){
        //count each letter and add them up
        letterCount++
    }
    return letterCount
}


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

let longestWord = function(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';

    // let index = 0

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        if(word.length > longestWord.length) {
            longestWord = word;
            index = i
        }
    }

    // return index;
    // let longestWord
    // return `The longest word is: ${longestWord}.  The index is this: ${words.indexOf(longestWord)}`
};

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


let uncompress = function (str) {

    let answerStr = "";

let numArr = []
let strArr = []
    //Add to answer to string += "somestr"
for (let i = 0; i < str.length; i+=2) {
    let letter = str[i]
    strArr.push(letter)
    // let num = str[i + 1]
    // console.log("MY FLAG", letter)
}

for (let i = 1; i < str.length; i+=2){
    let num = str[i]
    // console.log("NUM", num)
    numArr.push(num)
    // let num = str[i + 1]
    // console.log(letter, num)
}
console.log(numArr, strArr)


for(let i =0; i< numArr.length; i++){
    let finalNum = Number(numArr[i])
    // console.log(finalNum)
    let finalLetter = strArr[i]
    // console.log(finalNum, finalLetter)
    for (let j = 0; j < finalNum; j++){
        // console.log(finalLetter)
        answerStr+= finalLetter
    }
}
// console.log(numArr, strArr)
//return the uncompresssed v string
return answerStr
}



console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
