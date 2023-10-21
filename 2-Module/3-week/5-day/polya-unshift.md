# Polya’s Problem Solving Process

Polya’s Problem Solving Process has four steps:

1. **Understand the Problem**
2. **Make a plan**
3. **Carry Out the Plan**
4. **Look back and improve your solution**

Let's use Polya's Problem Solving to help us with `unshift`.

### 1. Understand the Problem
The `unshift` method in this class should add a new value at the beginning of the `data` array without using built-in array methods (like `unshift`). After adding the value, the `length` of the array should increase by 1.

### 2. Make a plan
Our basic plan for the `unshift` method is:
- Step 1: Move each value in the array one position to the right, starting from the last element.
- Step 2: After all values are moved, place the new value in the first position (`index 0`) of the array.
- Step 3: Increase the length of the array by 1.

### 3. Carry Out the Plan
Here's the code implementation of the plan:

```js
unshift(val) {
    // Step 1: Move each value one position to the right
    for (let i = this.length ; i > 0 ; i--) {
      this.data[i] = this.data[i-1];
    }

    // Step 2: Place the new value at the beginning of the array
    this.data[0] = val;
    // Step 3: Increase the length
    this.length++;
}
```

### 4. Look back and improve your solution

This method effectively implements the unshift operation. However, there are some things we could consider implementing as well:

1. **Capacity**: What happens when the array's length is equal to its capacity and we want to unshift a new element? In a typical dynamic array, we would resize the internal array to a larger capacity (often doubling it). We should consider adding this functionality.

2. **Performance**: The current implementation moves all elements to the right one by one. This is O(n) time complexity since all elements need to be moved, but the built-in `unshift` is O(n) so we're probably fine matching its performance.

3. **Return Value**: The `unshift` method returns the new length of the array after the value is added. We could consider adding this too.
