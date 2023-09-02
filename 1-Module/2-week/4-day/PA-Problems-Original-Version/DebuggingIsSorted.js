function isSorted(nums) {

    // Loop through each number
    for (let i = 0 ; i < nums.length ; i++) {

        // Check if the current number is less than
        // the previous number
        if (nums[i-1] < nums[i]) {
            // If it's not, return false
            return false;
        }
    }

    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return true;

}

isSorted([1, 2, 3, 4, 5])  // true
isSorted([2, 2, 4, 4])  // true
isSorted([1, 2, 4, 3, 5, 6])  // false

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
