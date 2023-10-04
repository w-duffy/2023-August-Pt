// write a function called arrMutator that takes in an array and returns a func.
// the returned func takes in a word to add to each el in the original array.
// the returned func MUST mutate the original array

function arrMutator(arr) {
  //your code here
  return (word) => {
    let counter = 0
    while(counter < arr.length){
      let shifted = arr.shift()
      arr.push(`${shifted} ${word}`)
      counter++
    }
  }
}

let originalArray = ["dog", "bat", "cat"];
let someFunc = arrMutator(originalArray);
someFunc("friend")
console.log(originalArray); //[ 'dog friend', 'bat friend', 'cat friend' ]
console.log(originalArray === originalArray); //true

let originalArray2 = ["a", "b", "c"];
let abc = arrMutator(originalArray2);
abc("hello");
console.log(originalArray2); //[ 'a hello', 'b hello', 'c hello' ]
console.log(originalArray2 === originalArray2); //true
