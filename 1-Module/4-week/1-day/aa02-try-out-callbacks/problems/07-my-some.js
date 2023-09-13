/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

Examples:

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/

let myFunc = function (num) {
return num + 2;
}
// console.log(myFunc)

//function addTwo(num){
//    return num + 2
// }

// let superAdd = function (num1, num2, callBackFunction){
//     let sum = num1 + num2;

//     let res = callBackFunction(sum)
//     return res
// }

// let doubler = function(n){
//     return 2 * n;
// }

// console.log(superAdd(3,2,doubler))

// let addTwo = function (num) {

//     return (num + 2)
// }

// let sum = addTwo(2);
// console.log(sum)


// // console.log(2 + 2)
// console.log(addTwo(2))

let addTwo = function (num) {

     console.log(num + 2)

}



let newFunc = function (cb){
    console.log(cb(2))

    return 10
}
// 2+10
console.log(2+10)
// newFunc(addTwo) // prints
console.log(newFunc(addTwo)) // prints





// let sum = addTwo  //=>> /// let sum = 4
// console.log(sum(2))
// console.log(addTwo(2))
// function mySome(array, cb) {
//     // Your code here
// }

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = mySome;
} catch(e) {
    return null;
}
