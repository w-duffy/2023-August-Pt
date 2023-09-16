/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // Your code here
 let obj = {}
 let answer = false

 for (let i = 0; i < objArray.length; i++){
   let obj = objArray[i]
   // console.log(obj)
   let keyArr = Object.keys(obj)




   keyArr.forEach(el =>{
    if(el === keyString){
      answer = true

    }
   })
  }

return answer
  //  for (let key in obj){
  //     //if any of the objects contains the `keyString` as a key within them
  //     if(key === keyString){
  //       return true
  //     }

  //     // console.log(obj[key])
  //     // console.log("1", obj.key)
  //     // console.log("2", obj["key"])
  //   }
  // }
  // return false

  //return true or false


}

let objArray = [
  { name: "Rupert", },
  { age: 42 },
  { planet: "food", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
