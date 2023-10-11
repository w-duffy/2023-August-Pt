//Reference Error: Something does not have a proper reference. It may not exist

/*
console.log(helloWorld)
let helloWorld = "hello world";
*/

//Type Error: Not using a Data Type correctly. Example, trying to invoke a number as if it were a function

/*
let myNum = 1;
myNum()
*/

//Syntax Error: Writing code that does not follow proper Javscript Syntax. Example, not closing curlies

/*
const myObj = {
*/

//Range Error: Maximum Call Stack exceeded: Error thrown by node when something is infinitely taking up the call stack. (AKA Stack overflow)

/*
function brokenFunc(){
    return brokenFunc()
}
brokenFunc()
*/








// Custom Errors: Error is a built-in class that we can use to create errors, or extend off Errors



/*
I can use the `throw` keyword to have my code stop running when it encounters an error
We use the `new` keyword to create a new instance of an Error

We can use `Try...Catch` blocks to run code, and if we encounter an error, then we run the catch portion. Think of this like an if else

*/

class MyCustomError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode
  }
}


// let peopleArr = ["Anthony", "Will"];

let peopleArr = [];
let errors = [];
try {
  if (peopleArr.length > 0) {
    console.log("There are people in our array")
  } else {
    throw new MyCustomError("Our array is empty!", 404)
  }
} catch (error) {
  //This will run and the error thrown will not stop code;
  errors.push(error);
  // console.log(errors);
  throw error
  // We can also choose to throw here to then stop the code
}
