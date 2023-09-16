/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	// Your code here
	let obj = {}
	let strArr = string.split("")

	strArr.forEach(el =>{

		if(obj[el] === undefined){
			obj[el] = 1;
		} else{
			obj[el]++
		}
	})
	//need a return
	return obj
}


function duplicateCharMinCount(string, minCount) {
// 	// Your code here
	// console.log(string)
	// console.log(minCount)

// 	//create an arr
let arr = []
let obj = countCharacters(string)


// here is helper output { a: 1, p: 2, l: 1, e: 1 }
for (let key in obj){
	let val = obj[key]
	// console.log("key", key)
	// console.log("val", val)
	// 	//need IF to check the vals are greaterthan or equal to mincount
	if(val >= minCount){
		arr.push(key)
	}
}
// 	//return arr
return arr
}


// console.log(duplicateCharMinCount("apple", 2)) // ["p"]
// console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
// console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
