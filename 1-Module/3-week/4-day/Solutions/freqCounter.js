/*
Frequency Counter
Given a sentence string, sentence, write a function that returns the most
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one
(e.g. if 'a' and 'b' are both the most common, return 'a' because
it is closest to the beginning of the alphabet).
Be sure to exclude spaces when counting
characters.

*/


// const sentence = "What is the most common character in this sentence";
const sentence = "aaa bbb c";

const mostCommonChar = sentence => {

    let arr = sentence.split(" ");
    let obj = {}

    for (let i = 0; i < arr.length; i++){
    //   console.log(arr[i])
      let word = arr[i]
      let letterArr = word.split("")
    //   console.log(letterArr)
      for (let j = 0; j < letterArr.length; j++){
        let letter = letterArr[j]

        if(obj[letter] === undefined){
            obj[letter] = 1;
        }
        obj[letter]++

      }


    }

    let highest = 0;
    let answer = "";
    for(let key in obj){
        let value = obj[key]
        // console.log(key, value)
        if (value > highest && answer < key){
            highest = value
            answer = key
        }
    }

return answer

}

console.log(mostCommonChar(sentence));           //  "t"
