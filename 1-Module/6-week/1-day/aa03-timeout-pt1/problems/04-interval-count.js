/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

function intervalCount(cb, delay, amount) {
  // Your code here
  const interval = setInterval(function() {
    cb();
    amount--;

    if (amount === 0) {
      clearInterval(interval);
    }
  }, delay);
}

intervalCount(function() {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


// function intervalCount(cb, delay, amount) {
//   function recursiveInterval(remaining) {
//       if (remaining <= 0) return;

//       cb();

//       const interval = setInterval(() => {
//           clearInterval(interval);
//           recursiveInterval(remaining - 1);
//       }, delay);
//   }

//   recursiveInterval(amount);
// }
// function intervalCount(cb, delay, amount) {
//   if (amount <= 0) return;

//   setTimeout(() => {
//       cb();
//       intervalCount(cb, delay, amount - 1);
//   }, delay);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
