// const recurse = (num) => {
//     console.log(num);
//     // base case x === 0


//     // recursive case x > 0
//     if (num > 0) {

//         // recursive step == calling function with x -1
//         recurse(num - 1);
//     };

//   };

//   recurse(10)

// let arr = [1,2,3]




// let lastName = 'Duffy'
// let age = 100

// let myFunc = () =>{
//     // console.log("test")
//     return "IS THIS REALLY WORKING"
// }
// let someVar = myFunc()
// // let sent = someVar + " " + lastName + " " + age
// // `Hi my name is will sentence is cool`
// // "Hi my name is will sentence is cool"
// // console.log(sent)
// let interpolatedString = `Hello, my name is ${someVar} ${lastName}
// and I am ${age} years old`

// // console.log(interpolatedString)
// function foo() {
//     console.log("a", ': foo has been added to the call stack');
//     bar();
//     console.log("e", ': foo will finish executing then be removed from the call stack');
//   }

//   function bar() {
//     console.log("b", ': bar has been added to the call stack');
//     baz();
//     console.log("d", ': bar will finish executing then be removed from the call stack');
//   }

//   function baz() {
//     console.log("c", ': baz has been added to the call stack, will finish executing then be removed');
//   }

//   foo();
//   console.log("f", ': everything on the call stack has finished executing')


// const recurse = (x) => {
//     console.log(
//       x,
//       ": function call starting to execute, added to the call stack"
//     );
//     // base case x === 0
//     // recursive case x > 0
//     if (x > 0) {
//       // recursive step == calling function with x -1
//       recurse(x - 1);
//     }
//     console.log(
//       x,
//       ": function call about to finish execution, will be removed from the call stack"
//     );
//   };
//   recurse(2);


// const recurse = (x) => {
//     debugger;
//     console.log(
//         x,
//         ": function call starting to execute, added to the call stack"
//         );
//         // base case x === 0
//         // recursive case x > 0
//         if (x > 0) {
//             debugger;
//             // recursive step == calling function with x -1
//             recurse(x - 1);
//         }
//         debugger;
//         console.log(
//       x,
//       ": function call about to finish execution, will be removed from the call stack"
//     );
//   };
//   recurse(2);


  function foo() {
    return 2 + bar();
  }

  function bar() {
    return 6 + baz();
  }

  function baz() {
    return 3;
  }

  console.log(foo());
