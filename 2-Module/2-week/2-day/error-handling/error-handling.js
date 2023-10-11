// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try{

  sum(null); //will throw a typeError because can not do .length on the data type of `null`
} catch (error){
  console.log(error);

}

// 2.
// tests

function sayName(name){
  if(typeof name !== "string"){
    throw new TypeError("Invalid name! Must be a string!")
  } else {
    console.log(name)
  }
}


try{
  sayName("Alex"); //should work, because name is a string
  sayName(1); // should not work, because bad type
} catch(error){
  console.log(error)
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch (error) {
  console.log("Hello World!")
}
