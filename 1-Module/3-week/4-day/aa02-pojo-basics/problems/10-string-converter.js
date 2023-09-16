/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // Your code here
  // console.log(string)



  // let splitArr = string.split("");

  // console.log(splitArr)
  // splitArr.forEach(el =>{
  //   //if the key is not in the object
  //   if(obj[el] === undefined){
  //     //create key val pair where key is the letter -- val is number of times
  //     obj[el] = 1
  //   } else{

  //     // obj[el] +=1
  //     obj[el]++
  //   }
    //ELSE I don't need to create a kal pair but i need to increase the val in the key val pair

  // })

  return string.split("").reduce((obj, el) =>{
    // console.log("HERE", obj, el)
    if(obj[el] === undefined){
      obj[el] = 1
    } else{
      obj[el]++
    }

    return obj
  }, {})




  //return an object

}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
