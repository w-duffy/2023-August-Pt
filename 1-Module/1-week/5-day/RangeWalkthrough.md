# Range - Walkthrough
## Problem Description:

Write a function called `range` that takes in two numbers, `min` and `max`, and returns an array containing all numbers starting from `min` and ending at `max` inclusive. If `min` is greater than `max`, return an empty array.

---

## Solution from Lecture:
```javascript
function range(min, max) {
// console.log("1: ", min, max)

  let arr = [];

  for (let i = min; i <= max ; i++) {
  // console.log("2: ", i)
    arr.push(i);
  };

  return arr;
}
```

## Code Walkthrough:

```javascript
function range(min, max) {
  // console.log(min, max)
```

- We define a function called `range` which takes in two parameters: `min` and `max`.
- The commented out `console.log(min, max)` can be used for debugging purposes to see the values of `min` and `max`.

```javascript
  let arr = [];
```

- We declare a variable `arr` and initialize it as an empty array. This array will be used to store the sequence of numbers from `min` to `max`.

```javascript
  for (let i = min; i <= max ; i++){
  // console.log("1: ", i)
```

- A `for` loop is started where `i` is initialized to the value of `min`.
- The loop continues iterating as long as `i` is less than or equal to `max`.
- On each iteration, `i` is incremented by `1`.
- The commented out `console.log("1: ", i)` can be used for debugging purposes to see the current value of `i`.

```javascript
    arr.push(i);
```

- Inside the loop, the current value of `i` is pushed into the `arr` array. As a result, `arr` will eventually contain all the numbers from `min` to `max` inclusive.

```javascript
  }
  return arr;
}
```

- After the loop is done iterating, the function returns the `arr` which now contains the sequence of numbers from `min` to `max`.



### Additional Notes:

1. **Function Declaration**:
    ```javascript
    function range(min, max) {
    ```
    - This line declares a function named `range` with two parameters, `min` and `max`.
    - Functions in JavaScript can be thought of as sets of instructions that can be executed multiple times. They can optionally accept values (parameters) and return a result.

2. **Arrays**:
    ```javascript
    let arr = [];
    ```
    - An array is a collection of items stored in contiguous memory locations.
    - Arrays in JavaScript can contain elements of various data types.
    - Here, we initialize an empty array, `arr`, which will later store the numbers in the specified range.

3. **For Loop**:
    ```javascript
    for (let i = min; i <= max ; i++){
    ```
    - The `for` loop is a control flow statement for repeated execution of code.
    - It's structured in three parts:
      - Initialization (`let i = min`): Starting loop control variable `i` at `min`.
      - Condition (`i <= max`): The loop continues as long as this is true.
      - Iteration Statement (`i++`): This increments `i` by 1 after each iteration.

4. **Push Method**:
    ```javascript
    arr.push(i);
    ```
    - The `push` method is built-in to JavaScript arrays.
    - It adds one or more elements to the array's end and returns the array's new length.
    - In this scenario, it adds the current value of `i` to `arr`.

5. **Return Statement**:
    ```javascript
    return arr;
    ```
    - The `return` statement concludes the function's execution and sends a value back to the function's caller.
    - Here, the `arr` (filled with numbers from `min` to `max`) is returned.

6. **Terminology**:
    - **Variable**: Represents a memory location named symbolically, storing a known or unknown value or information.
    - **Loop Control Variable**: In our `for` loop, the loop control variable is `i`. It directs how many times the loop will execute.

---
