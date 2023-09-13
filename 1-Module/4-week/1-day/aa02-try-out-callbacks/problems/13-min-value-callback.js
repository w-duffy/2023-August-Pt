/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

// let arr = [1,2,3]
// console.log(arr[3])

function minValueCallback(array, cb) {
    // Your code here
    let min = array[0]
    // let min = null
    // console.log("arr", array)
    // console.log("cb", cb)

    array.forEach(el => {
      if(el < min){
        min = el
      }
    });



    if(!cb){
      return min
    }

    // console.log("min: ", min)
    return cb(min)

}

console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}
