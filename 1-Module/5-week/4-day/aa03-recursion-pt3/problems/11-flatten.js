/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
// most common solution:
// function flatten(arr) {

//   let newArray = [];

//   arr.forEach(function (contents) {
//       if (Array.isArray(contents)) {
//         newArray.push(...flatten(contents));
//       } else {
//         newArray.push(contents);
//       }
//   });

//   return newArray;

// }



// without forEach:
  function flatten(arr) {

    // Base case: if arr is not an array, return an array containing arr

    if (!Array.isArray(arr)) {
      return [arr];
    }

    // If the array is empty, return an empty array
    if (arr.length === 0) {

        return [];
    }
    // Recursively flatten the first element and concatenate
    //with the flattened rest of the array
    return flatten(arr[0]).concat(flatten(arr.slice(1)));

}

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([3])); // [1, 2, 3]
console.log(flatten([2, [3]])); // [1, 2, 3]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
