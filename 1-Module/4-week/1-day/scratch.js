//Can be assigned to variables
// let myFunc = () => 'hello'
// let myFunc2 = (el, idx) => {

//     return `The el is ${el} + at index: ${idx}`;

//     }

// console.log(myFunc)
// console.log(myFunc())

// let myVar = myFunc()
// console.log(myVar)

//Can be arguments for functions

// myFunc("Hello World")

// let someNewFunc = function(){
// return 'im a function'
// }

// console.log(someNewFunc)

// let myFunc = (arg) => console.log(arg())
// myFunc(function(){ return 'im a function'})

// myFunc(someNewFunc)

// let myFunc = (arg) => arg()

// console.log(myFunc(function(){ return 'im a function'}))

// //Can be returned from a function

// let arr1 = [1,2,3]

// let mapArr1 = arr1.map((el, idx) => {
// //
//     return `The el is ${el} + at index: ${idx}`;

//     })

// console.log(mapArr1)


// let myCoolFunc = (el, idx) => {
//   return `The el is ${el} + at index: ${idx}`;
// };

// let arr = [1, 2, 3];

// let mapArr = arr.map(myCoolFunc);


// console.log(mapArr)








let foobar = function(cb) {
    console.log("foo");
    // cb();
    console.log(cb())
    console.log("bar");
  };

  let sayHello = function() {
    // console.log("hello");
    return 'hello'
  };

  foobar(sayHello);
