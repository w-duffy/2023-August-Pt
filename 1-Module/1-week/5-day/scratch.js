// function declaration syntax
// function myFunctionName(arg1, arg2) {
//     console.log('Hello World!' + " " + arg1 + " " + arg2)
// }

// myFunctionName('cool', 'stuff!')

// function expression syntax
// let myVariable = 'some value'

// let myFunctionName = function(arg1, arg2) {
//     console.log('Hello World!' + " " + arg1 + " " + arg2)
// };
// myFunctionName('cool', 'stuff!')

// myFunctionName = "WIll took over"

// console.log("2:", myFunctionName)




// let sentenceStr = 'Today I Learned That Strings Are Primitive And They Are Immutable'

// // console.log(sentenceStr[1])
// sentenceStr[1] = 'u'

// console.log(sentenceStr)

// /MUTABLE

// let sentenceArr = ['Today', 'I', 'Learned', 'That', 'Arrays', 'Are', 'Mutable']


// sentenceArr[0] = 'Yesterday'

// console.log("What will this be", sentenceArr)




let nestedArrays = [ ['SubArray1Index0', 'SubArray1Index1'], ['SubArray2Index0', 'SubArray2Index1'], ['SubArray3Index0', 'SubArray3Index1'] ]

for ( let i = 0 ; i < nestedArrays.length ; i ++ ) {
	let subArray = nestedArrays[i]
    console.log(subArray)
}


// let nestedArrays = [ ['SubArray1Index0', 'Index1'], ['SubArray2Index0', 'SubArray2Index1'], ['SubArray3Index0', 'SubArray3Index1'] ]

// for ( let i = 0 ; i < nestedArrays.length ; i ++ ) {
// 	let subArray = nestedArrays[i]

//     console.log(subArray, '----', `Outer Loop Current Iteration ${i}`)

//    // using a different variable in our inner loop so we do not affect the i variable in the outer loop
//     for (let j = 0 ; j < subArray.length ; j ++ ) {

//     	let element = subArray[j]

//         console.log(element,'-----', `Inner Loop Current Iteration ${j}`)

//     }
// }
