/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/
function keyAdderUniqueVal(object, key, value) {
	// Your code here
	// console.log("1", object)
	// console.log("2", key)
	// console.log("3", value)

	//iterate through object, and check all the values to see if they equal param value
	let valArr = Object.values(object)
	// console.log("valarr", valArr)
	for (let k in object) {
		let val = object[k]
		// console.log("v", val)
		if(valArr.includes(value) !== true){
			// console.log("if logic", valArr.includes(value))

			object[key] = value
		}
		// console.log("k", k)
		//probably need an if
		//making a key val pair
	}
	//Return the mutated object.
	// console.log(object)
	return object
}

//Amber's
// function keyAdderUniqueVal(object, key, value) {
// 	if(!Object.values(object).includes(value)) {
// 	 object[key] = value;
// 	}
// 	 return object;
// 	}

//sean's
function keyAdderUniqueVal(object, key, value) {

	for (const key in object) {
	 if(object[key] === value)
	 return object
	}

	object[key] = value
	return object
   }

//COMMENT OUT AT END
let cat = { name: 'Willie', color: 'orange' };
// console.log(keyAdderUniqueVal(cat, "toy", "yarn")); // => {name: "Willie", color: "orange", toy: "yarn"}
// console.log(keyAdderUniqueVal(cat, "fruit", "orange")); // => {name: "Willie", color: "orange", toy: "yarn"}
// console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
