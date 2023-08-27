# My Includes - Walkthrough

## Problem Description:

Implement a function named `myIncludes` that mimics the behavior of JavaScript's built-in `Array.prototype.includes` method. The function should accept an array `arr` and a target value `target`. It should return `true` if the target value exists within the array, and `false` otherwise.

---

## Problem Solution:
```javascript
let myIncludes = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (target === el) {
            return true;
        }
    }
    return false;
};
```

## Code Walkthrough:

```javascript
let myIncludes = function(arr, target) {
```

We declare a function `myIncludes` using a function expression. This function accepts two parameters, `arr`, which is the array we want to search within, and `target`, which is the value we want to find.

```javascript
    for (let i = 0; i < arr.length; i++) {
```

We initialize a `for` loop. The loop starts with `i` at `0` (the index of the first element in an array) and continues until `i` is less than the length of `arr`. This ensures we check every element in the array.

```javascript
        let el = arr[i];
```

Inside the loop, we declare a variable `el` that represents the current element of the array at index `i`. This is done to make our code more readable and to avoid repeatedly typing `arr[i]` in subsequent lines.

```javascript
        if (target === el) {
```

We use a conditional `if` statement to compare the current element `el` with our target. The `===` is a strict equality operator, ensuring both the value and type are the same. If they are equal:

```javascript
            return true;
```

The function immediately returns `true`, indicating that the target value was found in the array.

```javascript
    return false;
};
```

After the loop has completed, if we haven't found the target in the array, we return `false`.


---

### Additional Notes:

1. **Function Expressions vs. Declarations**: Here we're using a function expression (where a function is assigned to a variable) instead of a function declaration. Both are valid ways to define functions in JavaScript, but they have some differences, especially when it comes to hoisting.  However, don't worry about hosting right now -- we'll discuss it in future weeks.

2. **Strict Equality (===) vs. Loose Equality (==)**: The strict equality operator (`===`) checks both value and type, ensuring a more precise match than the loose equality operator (`==`), which might perform type coercion.  For example, `(2 == "2")` is  `true` because of type coercion.

3. **Loop Early Exit**: One of the advantages of the approach used in `myIncludes` is that the function can exit early once a match is found, making it more efficient for large arrays when the match is found early on.

4. **Built-in Methods**: JavaScript provides a built-in method `Array.prototype.includes` that performs this same task. The exercise here is to help us understand how such methods might be implemented under the hood.

---
