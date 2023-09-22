/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/


// console.log("here")
function fibonacci(n) {
  // console.log("here 2")
//bc
if(n <= 2 && n !== 0) return 1

return fibonacci(n - 1) + fibonacci(n - 2)

}

// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(100)); // 55

//OPTIONAL BONUS CONTENT BELOW:---------------------------------------------------------------------------

//Advanced Memoization approach -- This is a faster version of fib,
//but this solution is outside of scope for class.  Please skip unless you're interested.
function fibonacci(n, memo = {}) {

  if (n in memo) return memo[n];

  // Base cases
  if (n === 1 || n === 2) return 1;


  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
console.log(fibonacci(100)); // 354224848179262000000




/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
