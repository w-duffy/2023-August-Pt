/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/
function isSorted(arr) {
  // Your code here

  //i need to check if prev is smaller than next  => return true
  //i need to check if prev is NOT smaller than next  => return false

  // base case
  if(arr.length === 1 ) return true;

if (arr[0] > arr[1]){
  return false
}
// recursive case
  // recursive step

  return isSorted(arr.slice(1))

}

//michael's
function isSorted(arr) {
  if(arr.length <= 1) {
    return true;
  } else {
    return arr[0] <= arr[1] && isSorted(arr.slice(1));
  }
}

//michelle's
function isSorted(arr) {
  // Your code here
  let i = 0
  if(i === 1){
    return true;
  }
  if (arr[i] < arr[i + 1]){
    return true;
  }
  else if(arr[i] > arr[i + 1]){
    return false;
  }
  return isSorted(arr.slice(i + 1))
}


//Jacob's
function isSorted(arr, index = 0) {
  if (index >= arr.length - 1) {
    return true;
  }

  if (arr[index] > arr[index + 1]) {
    return false;
  }

  return isSorted(arr, index + 1);
}

//Reece's solution
function isSorted(arr) {
  arr.shift()
  //console.log('arr=', arr)

  if (arr[0] > arr[1]){
    return false;
  }


  if (arr[0] < arr[1]) {
    //console.log('is true')
    return isSorted(arr)
  }
  return true
}


// Jacob v2

function isSorted(arr, index = 0) {
  if (index >= arr.length - 1) {
    return true;
  }

  if (arr[index] > arr[index + 1]) {
    return false;
  }

  return isSorted(arr, index + 1);
}



// console.log(isSorted([5, 4])); // true
// console.log(isSorted([1, 2])); // true
// console.log(isSorted([1, 2, 3])); // true
// console.log(isSorted([1, 2, 3, 4])); // true
// console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
