/*
Debugging isSorted
This problem is worth 4 points.
You may receive partial credit.

Your friend is working on a function called isSorted() which checks
if an array of numbers is in order,
sorted lowest to highest. The function should return true if
the array is in order, and false if it is not.
Unfortunately, the code is not working correctly. Help them fix it!
*/

//i have an array.  I need to check if all the elements are less than the next element if it is return true
// otherwise return false.

//loop through array.  to check every el  arr[i]

// arr[i] < arr[i + 1] good





function isSorted(nums) {

    // Loop through each number

    let tracker = true
    for (let i = 0 ; i < nums.length ; i++) {

        // Check if the current number is less than
        // the previous number
        if (nums[i] < nums[i - 1]) {
            // If it's not, return false
            // return false;
            tracker = false
        }
    }

    let assigned = "hello"
    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return tracker;

}

console.log(isSorted([1, 2, 3, 4, 5]))  // true
console.log(isSorted([2, 2, 4, 4]))  // true
console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false

/************ DO NOT WRITE BELOW THIS LINE**************/

let grade = false;

if (isSorted([1, 2, 3, 4, 5]) === true
 && isSorted([2, 2, 4, 4]) === true
 && isSorted([1, 2, 4, 3, 5, 6]) === false) {
    grade = true;
}

if (grade === true) {
    console.log('You have scored 1/1 points')
} else {
    console.log('You have scored 0/1 points')
}
