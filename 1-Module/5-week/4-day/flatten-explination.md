
### The Recursive Idea:

1. **Base Case**: If the input (`arr`) is not an array, then it's just a singular value. In this case, we return an array containing that value.
2. If `arr` is an empty array, return it as is. It's already "flattened".
3. If `arr` is a non-empty array, we break the problem into two parts:
   - Flatten the first element (`arr[0]`).
   - Flatten the rest of the array (`arr.slice(1)`).

4. Finally, concatenate the two flattened arrays from the above step.

### The Call Stack:

To understand the call stack, consider the example `flatten([1, [2, [3]]])`.

1. The initial call is `flatten([1, [2, [3]]])`.

2. Here, `arr[0]` is `1` and `arr.slice(1)` is `[2, [3]]`.

3. Flattening `1` just gives `[1]`.

4. For `flatten([2, [3]])`:
   - `arr[0]` is `2` and `arr.slice(1)` is `[[3]]`.
   - Flattening `2` gives `[2]`.
   - For `flatten([[3]])`:
     - `arr[0]` is `[3]` and `arr.slice(1)` is `[]`.
     - Here, we have another recursive call for `flatten([3])` which eventually gives `[3]`.
     - `flatten([])` will return `[]`.

5. Now, combining the results:
   - `flatten([3])` gives `[3]`.
   - `flatten([2, [3]])` gives `[2, 3]`.
   - `flatten([1, [2, [3]]])` gives `[1, 2, 3]`.

### Call Stack Visualization:

```
flatten([1, [2, [3]]])
    |
    |--> flatten(1) // Returns [1]
    |
    |--> flatten([2, [3]])
    |       |
    |       |--> flatten(2) // Returns [2]
    |       |
    |       |--> flatten([[3]])
    |               |
    |               |--> flatten([3])
    |                       |
    |                       |--> flatten(3) // Returns [3]
    |
    |-----> Result: [1, 2, 3]
```
