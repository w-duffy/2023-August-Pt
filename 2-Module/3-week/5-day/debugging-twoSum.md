# Debugging twoSum

### 1. Start with understanding the problem and initial assumptions:
Before adding `console.log`s, make sure that you understand the what the problem is asking and the expected outputs based on the inputs.

### 2. Identify common places where things might go wrong:
For `twoSum`, these are the general areas of concern:
- For Loop iterating through all elements.
- Pairs are being created correctly and summing correctly.
- You're return value is what you intended it to be.

### Debugging Guide:

**1. Check Loop Iteration**

Before checking specifics, make sure your for loops are working correctly.

```javascript
for (let i = 0; i < arr.length - 1; i++) {
    console.log("Outer loop number:", arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
        console.log("Inner loop number:", arr[j]);
        // ...
    }
}
```

This will help you ensure that each number is being checked and paired correctly.

**2. Check Pair Summation**

Confirm the pairs of numbers you're checking actually sum up to your target.

```javascript
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        console.log(`Checking pair: ${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`);
        if (arr[i] + arr[j] === target) {
            // ...
        }
    }
}
```

This helps verify that each pair adds up to what you expect.  And that they're being compared to the target correctly.

**3. Check Return Values**

Confirm the function is returning the expected boolean values at the right time.

```javascript
if (arr[i] + arr[j] === target) {
    console.log(`Found a match! ${arr[i]} + ${arr[j]} = ${target}`);
    return true;
}
// ... after loops
console.log("No pairs found that sum up to target.");
return false;
```

### 3. Test with Various Inputs

- Make sure to use all of the provided test cases.  If you're still not passing the specs, try and add some edge cases to test:

    -  Here are some edge cases: an empty array, an array with one item, or an array elements are of a different type such as strings.

### 4. Miscellaneous Tips:
- If the console gets too cluttered and hard to read, comment out some `console.log` statements once you're sure that part of the code works.
- Remember to remove or comment out all `console.log` statements once you're done debugging.
