// not using a key word to declare your variable will assing it to our global scope
// this is considered bad practice, we should always use a key word to define our variable even if it is gloab
global1 = "global scoped 1";

// we can initialize a global variable
let global2 = "global scoped 2";

console.log(global1);

const ourFunc = () => {
  // we have access to global variable everywhere
  console.log(global1);

  console.log(global2);

  // initializing a variable inside our function means only everything that comes after this line of code and is inside of our function will have access to this variable
  let funcVar1 = "func scoped 1";

  console.log(funcVar1);

  for (let i = 0; i < 10; i++) {
    // we have access to our global and our func initialized variables
    console.log("accessing from inside of a block inside of a func", global2);
    console.log("accessing from our func scope into our block scope", funVar1);

    // initializing a block scoped variable
    let block1 = "block scoped 1";

    console.log("accessing from same scope", block1);
  }
  // notice we do not have access to any variables initialized within our for loop
  // this is because of block scoping, anything defined inside that scope will not be able to be accessed outside of that scope
  console.log("trying to access from outside of scope", block1);
};

// notice we do do not have access to our function or block scoped variables
console.log("trying to access out of scope", funcVar1);
console.log("trying to access out of scope", block1);
console.log("accessing from the same scope", global2);

ourFunc();
