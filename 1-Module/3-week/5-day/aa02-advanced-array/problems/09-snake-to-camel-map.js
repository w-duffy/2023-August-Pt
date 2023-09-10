/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/

function snakeToCamel(str) {
    //!!START
      let words = str.split('_');
    let newWords = words.map(function(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return newWords.join('');
    //!!END
}


function snakeToCamel(str) {
  // Your code here

  let splitArr = str.split("_");
  // console.log(splitArr)
  let newArr = [];
  for (let i = 0; i < splitArr.length; i++) {
    let word = splitArr[i];
    let letterArr = word.split("");
    let result = letterArr.map((el, index) =>{
        if(index === 0){
            return el.toUpperCase()
        }
            return el.toLowerCase()
    })
    let lettersJoined = result.join("")
    // console.log("joined word:", lettersJoined)
    newArr.push(lettersJoined)
  }
// console.log()
  //index at 0 of el is first letter put it capital

  return newArr.join("")
}

console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // '/SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'



    // for (let j = 0; j < letterArr.length; j++) {
    //   let letter = letterArr[j];
    //   console.log(letter);
    //   if (j === 0) {
    //     newArr.push(letter.toUpperCase());
    //   } else {
    //     newArr.push(letter);
    //   }
    // }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = snakeToCamel;
} catch (e) {
  module.exports = null;
}
