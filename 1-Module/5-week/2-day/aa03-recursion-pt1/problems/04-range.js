/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


function range(start, end) {

  let arr = []
  //base case
  if(end <= start) return arr

  arr.push(start)
  // console.log(arr)
  // recursive step
  // start+1
// return arr.concat(range(start+1, end))
return [start, ...range(start+1, end)]
// return [...arr, ...range(start+1, end)]
  //recursive case/call
}


console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
