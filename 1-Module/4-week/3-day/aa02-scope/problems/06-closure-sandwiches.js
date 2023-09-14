/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
Sandwhich maker will return a new function.  This new func will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

// Your code here


// const sandwichMaker = () => {
//   const ingredients = ["tomato"];

//   return (newIngredient) => {
//     ingredients.push(newIngredient);
//     return `One sandwich with ${ingredients.join(" and ")}`;
//   };
// };

// let sandwichMaker = () =>{
//   //Michelle's solution:
//   let sandwitchOrder = "One sandwhich with tomato"
//   // let sandwhichOrder = "One sandwhich with tomato"

//   //return a function
//   return (string) => {
//     sandwitchOrder += (" and " + string)
//     // sandwhichOrder = sandwhichOrder + " and " + string
//     console.log("PRINTING: ", sandwitchOrder)
//     // console.log("PRINTING: ", sandwhichOrder)
//   }
//   //my solution

//   // // let sandwhichOrder = "One sandwhich with tomato"

//   // //return a function
//   // return (string) => {

//   //   // sandwhichOrder = sandwhichOrder + " and " + string

//   //   // console.log("PRINTING: ", sandwhichOrder)
//   // }


// }

let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
console.log(sandwich("jelly"))// => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread"))// => "One sandwich with tomato and spinach and jelly and bread"


// let sandwich2 = sandwichMaker(); // => returns a function
// sandwich2("pb") // => "One sandwich with tomato and pb"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
