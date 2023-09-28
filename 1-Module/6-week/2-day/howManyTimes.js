/***********************************************************************
Write a recursive function called `howManyTimes`
which takes an array of strings (`words`),
a target string (`target`), and
a counter initialized to 0.
The function should return the number of times two distinct strings
from the array can be combined to match the `target` string.

Hint: you can use a for loop, but the solution will remain recursive.

You can assume that an element at an index can only be the target
with elements at larger indexes
***********************************************************************/

function howManyTimes(words, target, counter=0) {

  //bc
  if(!words.length) return counter

  //rs
  let shifted = words.shift()

  words.forEach(el =>{
    if(shifted + el === target) counter++
  })

  //rc
  return howManyTimes(words, target, counter)

  }
  console.log(howManyTimes(["y", "es", "ye", "n", "o", "s"], "yes"));     // 2
  console.log(howManyTimes(["hel", "cat", "lo", "h", "apple"], "hello")); //1       // true
  console.log(howManyTimes(["a", "nt", "car", "an", "bike", "t"], "ant")); //2       // true
  // console.log(howManyTimes(["an"], "ant")); //0






//scratch work below from EST/PST/student contributions--------------------------



    // if(!words.length) return counter

    // for (let i = 1; i < words.length; i++){

    //   if ((words[0] + words[i]) === target) counter += 1
    // }


    // return howManyTimes(words.slice(1), target, counter)




  // //     //bc
  // if(!words.length) return counter
  // // console.log("WORDS", words)
  // let shifted = words.shift()

  // // for(let i = 1; i < words.length; i++){
  //   words.forEach(el =>{
  //     if (shifted + el === target){
  //       counter++
  //     }
  //   })
  // // for(let i = 0; i < words.length; i++){
  // //   //check to see if two elements === target -- and if so increase counter by 1
  // //   // if(words[0] + words[i] === target){
  // //   if(shifted + words[i] === target){
  // //     counter++
  // //   }
  // // }
  // //rs
  //  //rc
  // return howManyTimes(words, target, counter)
  // // return howManyTimes(words.slice(1), target, counter)
