let someFuncToRun = () => {
    console.log("run me")
  }

  // //call or invoke a
  // // someFuncToRun()

  // // setTimeout(() => {
  // //   someFuncToRun()
  // // }, 500)


  // let anotherFuncToRun = () =>{
  //   console.log("run me too")
  // }

  // let runBothFuncs = () =>{
  //   someFuncToRun()
  //   anotherFuncToRun()
  // }
  // setTimeout(runBothFuncs, 500)




// --------------- ex 1 ---------------------------

// function hello() {
//     console.log("hello!");
// }

// hello(); // Outputs: "hello!"

// // --------------- ex 2 ---------------------------

// hello(); // Reference Error

// let hello = function() {
//   console.log("hello!");
// };

// // // --------------- ex 3 ---------------------------
// let foo = "I'm a variable";  // Syntax Error due to the following function declaration

// function foo() {
//   return "I'm a function";
// }


//IIFE

// (function () {
//     console.log("I run immediately");
//   })();



// --------------- Problem 1 ---------------------------
// console.log('one');
// console.log('two');
// console.log('three');



// --------------- Problem 2 ---------------------------


// const foo = () => {
//     bar()
//     console.log('three');
// };


// const bar = () => {
//     console.log('two');
// };


// console.log('one');
// foo();
// console.log('four');

// // --------------- Problem 3 ---------------------------
// console.log('one');
// console.log('three');

// setTimeout(() => {
//     console.log('THIS FIRST?');
// }, 100);

// setTimeout(() => {
//     console.log('THIS SECOND?');
// }, 0);

//



// // --------------- Problem 1 ---------------------------
// setTimeout(() => {
//     console.log('time is up');
// }, 1000);

// console.log('end');

// // --------------- Problem 2 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// setTimeout(foo, 1000, 'potato', 'tomato');

// console.log('end');

// // --------------- Problem 3 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// const res = setTimeout(foo, 1000, 'potato', 'tomato');
// clearTimeout(res);


// // SetInterval


// // --------------- Problem 1 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// setInterval(foo, 1000, 'potato', 'tomato');

// // --------------- Problem 2 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// const interval = setInterval(foo, 1000, 'potato', 'tomato');
// clearInterval(interval);

// // --------------- Problem 3 ---------------------------
// const intervalCount = (count, delay) => {
//     const intervalObj = setInterval(() => {
//         console.log('time is up');
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj);
//         }
//     }, delay);
// }

// intervalCount(3, 500);
