// // not using a key word to declare your variable will assing it to our global scope
// // this is considered bad practice, we should always use a key word to define our variable even if it is gloab
// global1 = "global scoped 1";

// // we can initialize a global variable
// let global2 = "global scoped 2";

// console.log("1:", global1);

// const ourFunc = () => {
//   // we have access to global variable everywhere
//   console.log("2:",global1);

//   console.log("3:",global2);

//   // initializing a variable inside our function means only everything that comes after this line of code and is inside of our function will have access to this variable
//   let funcVar1 = "func scoped 1";

//   console.log("4:", funcVar1);

//   for (let i = 0; i < 1; i++) {
//     // we have access to our global and our func initialized variables
//     console.log("5:","accessing from inside of a block inside of a func", global2);
//     // console.log("6:", "accessing from our func scope into our block scope", funVar1);

//     // initializing a block scoped variable
// if(true){
//   console.group("GLOBAL CHECKKKKKK", global2)
//   let block1 = "block scoped 1";
// }

//     console.log("7:","accessing from same scope", block1);
//   }

//   // notice we do not have access to any variables initialized within our for loop
//   // this is because of block scoping, anything defined inside that scope will not be able to be accessed outside of that scope
//   // console.log("8:", "trying to access from outside of scope", block1);
// };
// // console.log("CHECK THIS ONE", funcVar1)

// // notice we do do not have access to our function or block scoped variables
// // console.log("trying to access out of scope", funcVar1);
// // console.log("trying to access out of scope", block1);
// // console.log("accessing from the same scope", global2);

// ourFunc();

// let variable;


// for (let i = 0; i < 1; i++) {
//   let highest = 1;
//   variable = "Hello World -- declared with let and is block scoped";
//   console.log(variable);
// }

// // console.log(i);
// console.log(highest);
// console.log(variable);


// for (let i = 0; i < 1; i++) {

//   if(true){
//     let str = "declared with const, can not be reassing and is block scoped";
//   }

//   str = "reassignment";
//   console.log("DID I PRINT?", str)
//   // sting = "reassignment";
//   // console.log(str);
//   // notice that you still can mutate that data if it is able to be mutated
//   // const arr = [1, 2, 3, 4];
//   // arr[0] = "we mutated";
//   // console.log(arr);
// }

// // console.log(i);
// // console.log("these are block scoped so we do not have access", str);
// // console.log("these are block scoped so we do not have access", arr);










// let apple
// console.log(apple)
// // let apple = "a"



// var myVariable = "ket"

const ourFunc2 = () => {

  console.log(
    "1: the var key word will hoist its declaration to the top of your function, but your variable swill be undefined",
    str,
    arr
  );
  for (let i = 0; i < 1; i++) {
    var str = "declared with const, can not be reassing and is block scoped";
    string = "reassignment";
    // console.log(str);
    // notice that you still can mutate that data if it is able to be mutated
    var arr = [1, 2, 3, 4];
    arr[0] = "we mutated";
    // console.log(arr);
  }
  // console.log("2: var is function scoped so we do have access", str);
  // console.log("3: var is function scoped so we do have access", arr);
};

// console.log(
//   "var is function scoped so we do not have access in our global",
//   str
// );
// console.log(
//   "var is function scoped so we do not have access in our global",
//   arr
// );
ourFunc2();
