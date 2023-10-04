//   // DECLARATION
// let num1;
// let num2;
// let variable;

// // At a high level, an expression is a valid unit of code
// //that resolves to a value.
// /*
// There are two types of expressions:
// 1. Those that have side effects (such as assigning values).
// 2. Those that purely evaluate and produce a value.
// */

// // EXPRESSION using the assignment operator (side effect)
// num1 = 1;      // Here, `num1 = 1` is an expression
// num2 = 2;   // that also has a side effect of assigning a value to num1/num2

// //Other Expressions that aren't statements
// 42;

// // EXPRESSION (evaluates)
// // This is immediately discarded since there's no side effect.
// num1 + num2;   // This evaluates to '3' but has no side effect and is not used.

// // ASSIGNMENT and EVALUATION (not discarded)
// //// This expression evaluates (num1 + num2)
// //and then has a side effect of assigning the result to sum.
// let sum = num1 + num2;

// // FUNCTION DECLARATION
// function myFunc(){
//   return "hi I'm in myFunc";
// }

// //STATEMENTS
// x = 5;          // assignment statement
// if (x > 10) {"test"} // if statement

// // FUNCTION EXPRESSION (assignment of a function to a variable)
// let newFunc = () => {
//     console.log("hi");

//     // return statement
//     return "test"
// }

// // ASSIGNMENT using the "=" operator
// variable = "hello";

// // DEMONSTRATION

// console.log(variable);     // Logs "hello"
// console.log(1);            // Logs 1
// console.log(1 + 1);        // Logs 2
// console.log(myFunc);       // Logs the function definition of myFunc
// console.log(myFunc());     // Invokes myFunc and logs its return value: "hi I'm in myFunc"

// //calling a function is an expression -- producess a value
// newFunc()
// console.log()

// let arr = [1,2,3]
// let newArr = []
// newArr.push("hello")

// let catArr = ["meow"]
// let catSound

// catArr.forEach(el => 1)

// catArr.forEach(el => catSound = el)

// console.log(catSound)

// let sampleFunc = () => {
//     newFunc()
// }

// sampleFunc()

// let anotherFunc = () => {
//     console.log("another Func")
//     sampleFunc()
// }

// anotherFunc()

// Expression statement
1 + 1;

// Logging the result of an expression
// console.log("before")
// console.log(1 + 1);
// console.log("after")

// // Invoking a function (this is an expression that executes a
//function which evaluates to the return value of the function)

// assignmentFunc();

// // Logging the result of a function invocation (expression)
// console.log(assignmentFunc());

// // Declaring a variable 'sum' and assigning
// //it the result of the expression '1 + 1'
// let sum = 1 + 1;
// console.log(sum);

// console.log(sum + 1)
// console.log(sum)

// // Assigning the returned value from a function to a variable
// let newVar = assignmentFunc();
// console.log(newVar);

//Methods are just functions that belong to an instance of an object
// let originalInstance = {myMethod: () =>{
//     console.log("I'm a method!")
// }}

// let newInstance = {newMethod: () =>{
//     console.log("I'm a different method!")
// }}

// originalInstance.myMethod()
// originalInstance.newMethod() //Will this throw an error?

// newInstance.newMethod()
// let arr = [1,2,3]
// arr.push("hi")

// console.log()
// console.log("hello")

let assignmentFunc = (test) => {
  let theAnswer = test;
  console.log("hello");
  return theAnswer;
};

// setTimeout(functionRef, delay)
//FunctionRef: A function to be executed after the timer expires.
setTimeout(assignmentFunc, 500, "answer");

let doo = () => {
  console.log("do");

  re();
  
};

let re = () => {
  console.log("re");

  let func = mi();

  func();
};

let mi = () => {
  console.log("mi");

  let fa = () => {
    console.log("fa");
    return "so la ti";
  };

  return fa;
};


doo();
