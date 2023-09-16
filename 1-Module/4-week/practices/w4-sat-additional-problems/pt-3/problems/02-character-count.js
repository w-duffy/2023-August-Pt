/*
    Character count:
    Write a function that takes in a string and returns an object that stores each character's count
    with characters as keys and the number of occurrences as values.

    console.log(characterCount('mississippi')); // prints {m: 1, i: 4, s: 4, p: 2}
    console.log(characterCount('cat')); // prints {c: 1, a: 1, t: 1}
    console.log(characterCount('What time is it?')); // prints {W: 1, h: 1, a: 1, t: 3, ' ': 3, i: 3, m: 1, e: 1, s: 1, '?': 1}

*/

function characterCount(string) {
  //!!START
  let counter = {};

  // basic for...of solution
  for (let letter of string) {
    if (counter[letter] === undefined) {
      counter[letter] = 1;
    } else {
      counter[letter]++;
    }
  }

  // ternary solution
  // for (let char of string) {
  //   counter[char] ? counter[char]++ : counter[char] = 1;
  // }

  return counter;

  // one-liner solution
  // return string.split('').reduce((counterObj, letter) => (counterObj[letter] ? counterObj[letter]++ : counterObj[letter] = 1, counterObj), {});
  //!!END
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = characterCount;
} catch (e) {
    module.exports = null;
}
