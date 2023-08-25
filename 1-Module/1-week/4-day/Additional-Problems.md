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

// To invoke
console.log(isFalse(true));  // Output: false
console.log(isFalse(false)); // Output: true
```

### 2. Using Logical AND (`&&`)

**Task**: Write a function named `areBothTrue` that checks if both provided boolean values are `true`.

```javascript

// To invoke
console.log(areBothTrue(true, true));   // Output: true
console.log(areBothTrue(true, false));  // Output: false
```

### 3. Using Logical OR (`||`)

**Task**: Write a function named `isEitherTrue` that checks if at least one of the provided boolean values is `true`.

```javascript

// To invoke
console.log(isEitherTrue(true, false));  // Output: true
console.log(isEitherTrue(false, false)); // Output: false
```

### 4. Combining Logical Operators

**Task**: Write a function named `checkValues` that accepts three boolean values and checks if either the first is `true` OR both the second and third are `true`.

```javascript

// To invoke
console.log(checkValues(false, true, true));   // Output: true
console.log(checkValues(false, true, false));  // Output: false
```


# Conditionals - logic & syntax practice

### 1. Check if Number is Positive or Negative

**Task**: Write a function named `checkSign` that accepts a number and prints whether it's positive, negative, or zero.

```javascript

// To invoke
checkSign(5);   // Output: Positive
checkSign(-3);  // Output: Negative
checkSign(0);   // Output: Zero
```

### 2. Find the Largest of Three Numbers

**Task**: Write a function named `findLargest` that accepts three numbers and returns the largest one.

```javascript

// To invoke
console.log(findLargest(1, 5, 3));  // Output: 5
```

### 3. Check if Number is Even or Odd

**Task**: Write a function named `checkParity` that accepts a number and prints if it's even or odd.

```javascript

// To invoke
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



# The Basics pt 2:

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
//your code:

// To invoke
console.log(repeat("hello", 3));  // Output: hello hello hello
```

### 6. Maximum Value

**Task**: Write a function named `maximum` that accepts two numbers and returns the larger number.

```javascript
//your code:
// To invoke
console.log(maximum(3, 7));  // Output: 7
```
