Evaluate the time complexity of each function:

**Practice 1**
```javascript
function loopExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```
**Expected Time Complexity**: ??

**Practice 2**
```javascript
function nestedLoopExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
```
**Expected Time Complexity**: ??

**Practice 3: Split Loops**
```javascript
function splitLoops(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }

    for (let j = 0; j < arr2.length; j++) {
        console.log(arr2[j]);
    }
}
```
**Expected Time Complexity**: ??


**Practice 5**
```javascript
function complexFunction(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] * arr[j]);
        }
    }
    return sum;
}
```
**Expected Time Complexity**: ??

**Practice 6**
```javascript
function getFirstElement(arr) {
    return arr[0];
}
```
**Expected Time Complexity**: ??
