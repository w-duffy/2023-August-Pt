/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/

function chainMap(val, ...callbacks) {
  // Your code here
//Jacob's version:
let newArr = [...callbacks];


return newArr.reduce((acc, cb) => {
  console.log("ACC", acc)
  console.log("CB", cb)
  return acc = cb(acc)
}, val)

// let result = val
  //return result of passing val through all callbacks
//   //sean & Brody's version:
//   for (let i = 0; i < callbacks.length; i++){
//     let cb = callbacks[i]
//     val = cb(val)
//     // val = callbacks[i](val)
//   }
//   // callbacks.forEach(cb => {
//   //   // console.log(result)
//   //   val = cb(val)
//   // })


// return val

}


let add5 = function(n) {
  return n + 5;
};

let half = function(n) {
  return n / 2;
};

let square = function(n) {
  return n * n;
};

// console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
// console.log(chainMap(25, add5, half, square));  // 225
// console.log(chainMap(4, square, half));         // 8
// console.log(chainMap(4, half, square));         // 4

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = chainMap;
} catch(e) {
  return null;
}
