/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

***********************************************************************/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

//helper function
let highestVowelCounter = (obj) =>{
let letter = ""
let highest = 0
for (let key in obj){
  let val = obj[key]
  if(val > highest){
    highest = val
    letter = key
  }
}

  return letter
}



const mostFrequentVowel = function (words, counter = {}) {

  //bc
  if(!words.length){
    return highestVowelCounter(counter);

    //Michael's Solution
  //   let mostValue = 0;
  //   let most = '';
  //   for(let [key, value] of Object.entries(counter)){
  //   if(value > mostValue){
  //     mostValue = value;
  //     most = key
  //   }
  // }

    //Jacob's Object.entries with sort
    // if(!Object.keys(counter).length){
    //   return ""
    // }
    // const sortedObj = Object.entries(counter).sort((a, b) => b[1] - a[1]);
    // if (sortedObj[0][1] === sortedObj[0][1]) {
    //   return sortedObj[0][0];
    // } else {
    //   return sortedObj[0][0];
    // }
  }

  //rs
  let popped = words.pop()

    for (let i = 0; i < popped.length; i++){
      let letter = popped[i]
      if(VOWELS.includes(letter)){
        if(counter[letter] === undefined){
          counter[letter] = 1
        } else{
          counter[letter] += 1
        }
      }
    }

  return mostFrequentVowel(words, counter)
}

// console.log(mostFrequentVowel([])); // ""
// console.log("HERE", mostFrequentVowel(['dog', "cat", "hooorse"])); // 'i' or 'o'
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i)' or 'o'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
