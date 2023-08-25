# The Basics of Syntax and Function Mechanics

### 1. Printing a Parameter

**Task**: Write a function named `printParam` that accepts a single parameter and prints it.

```javascript
printParam("I'm the argument");  // Output: I'm the argument
printParam("hi");  // Output: hi
```

### 2. Printing Both Parameters

**Task**: Write a function named `printBoth` that accepts two parameters and prints both.

```javascript
printBoth("First", "Second");  // Output: First Second
printBoth("yes", "no");  // Output: yes no
printBoth("hello", 2);  // Output: hello 2
```

### 3. Return the First Parameter

**Task**: Write a function named `returnFirst` that accepts two parameters and returns the first one.

```javascript
console.log(returnFirst("I should be printed", "I shouldn't"));  // Output: I should be printed
console.log(returnFirst("not first", "wait what?"));  // Output: not first
```

### 4. Concatenate Strings

**Task**: Write a function named `concatStrings` that accepts two strings and returns them concatenated.

```javascript
console.log(concatStrings("Hello, ", "World!"));  // Output: Hello, World!
```

### 5. Add Numbers

**Task**: Write a function named `addNumbers` that accepts two numbers and returns their sum.

```javascript
console.log(addNumbers(3, 4));  // Output: 7
console.log(addNumbers(6, 10));  // Output: 16
```

### 6. Print "Hello, World!"

**Task**: Write a function named `printHello` that doesn't accept any parameters and prints "Hello, World!".

```javascript

// To invoke
printHello();  // Output: Hello, World!
```

# Booleans Core Principals

### 1. Using Logical NOT (`!`)

**Task**: Write a function named `isFalse` that checks if a given boolean value is `false`.

```javascript
console.log(isFalse(true));  // Output: false
console.log(isFalse(false)); // Output: true
```

### 2. Using Logical AND (`&&`)

**Task**: Write a function named `areBothTrue` that checks if both provided boolean values are `true`.

```javascript
console.log(areBothTrue(true, true));   // Output: true
console.log(areBothTrue(true, false));  // Output: false
```

### 3. Using Logical OR (`||`)

**Task**: Write a function named `isEitherTrue` that checks if at least one of the provided boolean values is `true`.

```javascript
console.log(isEitherTrue(true, false));  // Output: true
console.log(isEitherTrue(false, false)); // Output: false
```

### 4. Combining Logical Operators

**Task**: Write a function named `checkValues` that accepts three boolean values and checks if either the first is `true` OR both the second and third are `true`.

```javascript
console.log(checkValues(false, true, true));   // Output: true
console.log(checkValues(false, true, false));  // Output: false
```


# Conditionals - logic & syntax practice

### 1. Check if Number is Positive or Negative

**Task**: Write a function named `checkSign` that accepts a number and prints whether it's positive, negative, or zero.

```javascript
checkSign(5);   // Output: Positive
checkSign(-3);  // Output: Negative
checkSign(0);   // Output: Zero
```

### 2. Find the Largest of Three Numbers

**Task**: Write a function named `findLargest` that accepts three numbers and returns the largest one.

```javascript
console.log(findLargest(1, 5, 3));  // Output: 5
```

### 3. Check if Number is Even or Odd

**Task**: Write a function named `checkParity` that accepts a number and prints if it's even or odd.

```javascript
checkParity(4);  // Output: Even
checkParity(7);  // Output: Odd
```

### 4. Determine Grade

**Task**: Write a function named `getGrade` that accepts a score and returns the corresponding letter grade based on the following scale:
- 90-100: A
- 80-89: B
- 70-79: C
- 60-69: D
- 0-59: F

```javascript
console.log(getGrade(85));  // Output: B
console.log(getGrade(90));  // Output: A
console.log(getGrade(77));  // Output: C
```

### 5. Greet Based on Time of Day

**Task**: Write a function named `greet` that accepts an hour (0-23) and returns an appropriate greeting based on the time.

```javascript
console.log(greet(0));  // Output: Good morning!
console.log(greet(10));  // Output: Good morning!
console.log(greet(12));  // Output: Good afternoon!
console.log(greet(17));  // Output: Good afternoon!
console.log(greet(18));  // Output: Good evening!
console.log(greet(22));  // Output: Good night!
```

# Array Manipulation and Operations


### 1. Return First Element

**Task**: Write a function named `getFirst` that returns the first element of an array.

```javascript
console.log(getFirst([5, 3, 9]));  // Output: 5
```

### 2. Return Last Element

**Task**: Write a function named `getLast` that returns the last element of an array.

```javascript
console.log(getLast([5, 3, 9]));  // Output: 9
```

### 3. Return Sum of All Elements

**Task**: Write a function named `getSum` that returns the sum of all numbers in an array.

```javascript
console.log(getSum([1, 2, 3, 4, 5]));  // Output: 15
```

### 4. Return Array with Even Numbers

**Task**: Write a function named `getEvenNumbers` that returns an array containing only the even numbers from the input array.

```javascript
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: [2, 4, 6]
```

### 5. Return Array Length

**Task**: Write a function named `getLength` that returns the length of the given array.

```javascript
console.log(getLength(['apple', 'banana', 'cherry']));  // Output: 3
```


# More General Practice:

### 1. Greeting Function

**Task**: Write a function named `greet` that accepts a name as a parameter and returns a greeting message.

```javascript
console.log(greet("Alice"));  // Output: Hello, Alice!
```

### 2. Simple Arithmetic

**Task**: Write a function named `add` that accepts two numbers and returns their sum.

```javascript
console.log(add(3, 4));  // Output: 7
console.log(add(100, 1));  // Output: 101
```

### 3. Area of a Rectangle

**Task**: Write a function named `rectangleArea` that accepts the length and width of a rectangle and returns its area.

```javascript
console.log(rectangleArea(5, 10));  // Output: 50
console.log(rectangleArea(2, 2));  // Output: 4
console.log(rectangleArea(6, 5));  // Output: 30
```

### 4. Checking Even or Odd

**Task**: Write a function named `isEven` that accepts a number and returns `true` if the number is even, otherwise `false`.

```javascript
console.log(isEven(4));   // Output: true
console.log(isEven(7));   // Output: false
```

### 5. Simple Repeater

**Task**: Write a function named `repeat` that accepts a word and a number `n`. The function should return the word repeated `n` times, separated by spaces.

```javascript
console.log(repeat("hello", 3));  // Output: hello hello hello
```

### 6. Maximum Value

**Task**: Write a function named `maximum` that accepts two numbers and returns the larger number.

```javascript
console.log(maximum(3, 7));  // Output: 7
```

#  For Loop Structure and Flow Control


### 1. Print Numbers from 1 to 10

**Task**: Write a function named `printToTen` that uses a `for` loop to print numbers from 1 to 10.

```javascript
printToTen(); // 1 2 3 4 5 6 7 8 9 10
```

### 2. Sum of Numbers from 1 to N

**Task**: Write a function named `sumToN` that accepts a number `n` and returns the sum of numbers from 1 to `n`.

```javascript
console.log(sumToN(5));  // Output: 15  //(1 + 2 + 3 + 4 + 5)
console.log(sumToN(2));  // Output: 3  //(1 + 2)
```

### 3. List All Even Numbers up to N

**Task**: Write a function named `printEvenToN` that prints all even numbers up to and including `n`.

```javascript
printEvenToN(8);  // Output: 2, 4, 6, 8
printEvenToN(4);  // Output: 2, 4
```

### 4. Loop Over Array Elements

**Task**: Write a function named `printArrayElements` that accepts an array and prints each element.

```javascript
printArrayElements(["apple", "banana", "cherry"]);  // Output: apple, banana, cherry
```

### 5. Count Specific Elements in Array

**Task**: Write a function named `countZeros` that counts the number of zero elements in a given array.

```javascript
console.log(countZeros([1, 0, 3, 0, 5, 0]));  // Output: 3
console.log(countZeros([7, 0, 6]));  // Output: 1
```


# More For Loop Fun

### 1. Summing Numbers up to N

**Task**: Write a function named `sumUpTo` that accepts a number `n` and returns the sum of all numbers from 1 up to `n`.

```javascript
console.log(sumUpTo(5));  // Output: 15
```

### 2. Counting Specific Elements in an Array

**Task**: Write a function named `countOccurrences` that accepts an array and a target element, then returns the number of times the target element appears in the array.

```javascript
console.log(countOccurrences([1, 3, 2, 3, 4, 3], 3));  // Output: 3
```

### 3. Creating a List of Even Numbers

**Task**: Write a function named `listEvensUpTo` that accepts a number `n` and returns an array of all even numbers up to `n`.

```javascript
console.log(listEvensUpTo(10));  // Output: [2, 4, 6, 8, 10]
```

### 4. Find Maximum Value in an Array

**Task**: Write a function named `findMax` that accepts an array of numbers and returns the maximum value.

```javascript
console.log(findMax([5, 3, 8, 4, 2]));  // Output: 8
```

### 5. Concatenate String n Times

**Task**: Write a function named `repeatString` that accepts a string and a number `n`, then returns the string repeated `n` times.

```javascript
console.log(repeatString('Hi', 3));  // Output: 'HiHiHi'
```
