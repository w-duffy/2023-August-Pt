### Call Stack for isSorted

Example: `isSorted([1, 2, 4, 3, 5])`

1. We start with the initial call:
```
isSorted([1, 2, 4, 3, 5])
```

2. Since the length of the array is 5 (> 2), and the first number (1) is not greater than the second number (2), we make a recursive call by removing the first element:
```
isSorted([1, 2, 4, 3, 5])
    ↘ isSorted([2, 4, 3, 5])
```

3. Again, 2 is not greater than 4. So we continue the recursion:
```
isSorted([1, 2, 4, 3, 5])
    ↘ isSorted([2, 4, 3, 5])
         ↘ isSorted([4, 3, 5])
```

4. Now, 4 is greater than 3. The function returns `false`. All other calls on the stack will also terminate without making more recursive calls:
```
isSorted([1, 2, 4, 3, 5])
    ↘ isSorted([2, 4, 3, 5])
         ↘ isSorted([4, 3, 5]) -> returns false
    ↗ returns false
↗ returns false
```

The call to `isSorted([4, 3, 5])` saw an element out of order and immediately returned false. Since this "bubbles up" through all of the other calls, our main function call also returns false.

To better visualize the flow, you can think of the recursive function calls being stacked on top of one another (hence "call stack"). As soon as one of the calls returns a value, it gets taken off the stack, and the previous call continues processing with that returned value.

For the `isSorted` function, the worst-case scenario is that every element is checked until the function reaches the end of the list and determines that it is sorted. In such a case, the depth of the call stack would be equal to the length of the array.



### Fib Clarification

1. Begin with the first two numbers in the sequence:

```
0   1
```

2. To get the next number, sum the last two numbers:

```
0   1   1
      ^ + ^
```

3. Continue the pattern:

```
0   1   1   2   3   5   8   ...
      ^ + ^   ^ + ^   ^ + ^   ...
```
