/*
    Recursive Sort

    Given an array of numbers, write a function
    that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums, newArr = []) {
  //return a new arr
  //bc
//   let newArr = [];
  if (!nums.length) return newArr;
  let minimum = nums[0]
  let index = 0

  for (let i = 0; i < nums.length; i++){
    let el = nums[i]
    if(el < minimum){
        minimum = el
        index = i
    }
}
// console.log("MINIMUM", minimum)
newArr.push(minimum)
//rs
nums.splice(index, 1)
// console.log(nums)
  //rc

  return sort(nums, newArr)
//   return [minimum, ...sort(nums)]

//   return newArr.concat(sort(nums));
}

// console.log(sort([])) // prints []
// console.log(sort([9])) // prints [9]
// console.log(sort([5, 4, 3, 2, 1])); // prints [1, 2, 3, 4, 5]
// console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
