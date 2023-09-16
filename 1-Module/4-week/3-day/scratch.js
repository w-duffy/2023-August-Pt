// // not using a key word to declare your variable will assing it to our global scope
// // this is considered bad practice, we should always use a key word to define our variable even if it is gloab
// global1 = "global scoped 1";

// // we can initialize a global variable
// let global2 = "global scoped 2";


// const ourFunc = () => {
//   // we have access to global variable everywhere
//   console.log("2:", global1);

//   console.log("3:", global2);

//   // initializing a variable inside our function means only everything that comes after this line of code and is inside of our function will have access to this variable
//   // let funcVar1 = "func scoped 1";
//  let funcVar1 = "func scoped 1";

//   console.log("4:", funcVar1);

//   for (let i = 0; i < 1; i++) {
//     // we have access to our global and our func initialized variables
//     console.log("5:","accessing from inside of a block inside of a func", global2);
//     // console.log("6:", "accessing from our func scope into our block scope", funVar1);
// console.log("in for loop", funcVar1)
// let sum = 0

// }



// console.log("HERE: ", sum)

//     // initializing a block scoped variable
// if(true){
//   console.group("GLOBAL CHECKKKKKK", global2)
//   let block1 = "block scoped 1";
// }

    // console.log("7:","accessing from same scope", block1);
  // notice we do not have access to any variables initialized within our for loop
  // this is because of block scoping, anything defined inside that scope will not be able to be accessed outside of that scope
  // console.log("8:", "trying to access from outside of scope", block1);
// };
// console.log("CHECK THIS ONE", funcVar1)
// notice we do do not have access to our function or block scoped variables
// console.log("trying to access out of scope", funcVar1);
// console.log("trying to access out of scope", block1);
// console.log("accessing from the same scope", global2);

// ourFunc();


// let variable;


// for (let i = 0; i < 1; i++) {
//   let highest = 1;
//   variable = "Hello World -- declared with let and is block scoped";
//   console.log(variable);
// }

// // console.log(i);
// // console.log(highest);
// console.log(variable);

// let a = "apple"
// for (let i = 0; i < 1; i++) {
//   const a = "apple"

//   if(true){
//     // const a = "apple"
//     // let str = "declared with const, can not be reassing and is block scoped";
//   }
//   console.log("WHAT WILL PRINT", a)
//   a = "pear"

  // str = "reassignment";
  // console.log("DID I PRINT?", str)
  // sting = "reassignment";
  // console.log(str);
  // notice that you still can mutate that data if it is able to be mutated
  // const arr = [1, 2, 3, 4];
  // arr[0] = "we mutated";
  // console.log(arr);
// }

// console.log(i);
// console.log("these are block scoped so we do not have access", str);
// console.log("these are block scoped so we do not have access", arr);


// for (let i = 0; i < 1; i++) {
//   const str = "declared with const, can not be reassing and is block scoped";
//   // str = "reassignment";
//   // console.log(str);
//   // notice that you still can mutate that data if it is able to be mutated
//   const arr = [1, 2, 3, 4];
//   arr[0] = "we mutated";

//   arr = [4,5,6]
//   console.log(arr);
// }
// console.log(i);
// console.log("these are block scoped so we do not have access", str);
// console.log("these are block scoped so we do not have access", arr);










// // let apple
// // console.log(apple)
// // // let apple = "a"



// let str;
// str = "cat"

// const str = "declared with const, can not be reassing and is block scoped";

// const ourFunc2 = () => {
//   let str
//   console.log(
//       "1: the var key word will hoist its declaration to the top of your function, but your variable swill be undefined",
//       str,
//       // arr
//     );
//     for (let i = 0; i < 1; i++) {
//        str = "declared with const, can not be reassing and is block scoped";
//       // str = "reassignment";
//     console.log(str);
//     // notice that you still can mutate that data if it is able to be mutated
//     // var arr = [1, 2, 3, 4];
//     // arr[0] = "we mutated";
//     // console.log(arr);
//   }
//   // console.log("2: var is function scoped so we do have access", str);
//   // console.log("3: var is function scoped so we do have access", arr);
// };

// // console.log(
// //   "var is function scoped so we do not have access in our global",
// //   str
// // );
// // console.log(
// //   "var is function scoped so we do not have access in our global",
// //   arr
// // );
// ourFunc2();



//CLOSURES---------------------------------------------------------------------------------



// function climbTree(treeType) {
//   let treeString = "You climbed a ";


//   function sayClimbTree() {
//     // this inner function has access to the variables in the outer scope
//     // in which it was defined - including any defined parameters
//     return treeString + treeType;
//   }

//   return sayClimbTree;
// }

// const thisVariable = climbTree("Pine");

// console.log("1:", thisVariable);



// let globalVar = "1: I'm global";

// function outerFunction() {
//     let outerVar = "2: I'm in the outer function";

//     function innerFunction() {
//         let innerVar = "3: I'm in the inner function";
//         // console.log(innerVar, outerVar);
//         return innerVar;
//     }

//     return innerFunction();
// }

// // console.log(outerFunction());
// let someVar = outerFunction()
// console.log(someVar)




// let name = "will"
// let name2 = "will"
// name2 = "tom"

// console.log(name)
// console.log(name2)

// let char = {
//   name: "brody",
//   stats: 2,
//   saveSpot: "start"
// }

// function addTwo() {
//   let saveSpot = "start";


//   return function() {
//     count += 2;

//     if(bossBeaten === true){
//       char[saveSpot] = "olympus"
//     }

//     if(dead === true){
//       return saveSpot;
//     }
//   };
// }

// let addingTwo = addTwo(0);
// // // console.log(counter)
// console.log("FLAG", addingTwo()); // => 2
// let result = addingTwo()

// if( result === 4){
//   //do xyz
//   console.log("hi")
// }


// console.log(addingTwo()); // => 4
// // console.log(addingTwo()); // => 6


// if( result === 10){
//   //do xyz
//   console.log("wow you're adding a lot")
// }

// let addingTwo2 = addTwo(0);
// console.log(addingTwo2()); // => 2
// console.log(addingTwo()); // => 8


let array = [1,2,3]

let myMutator = (param) =>{
  param.push(5)
  console.log(param)
}

console.log("Console.logging :", myMutator(array))

myMutator(array) // answer print [1,2,3,5]
