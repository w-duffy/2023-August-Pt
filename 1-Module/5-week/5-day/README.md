# W5D5 - Function Hoisting, IIFE, & Falsy Values

### Debugging Recursive Solutions Project & Walkthrough (1hr)
---

### Solving Problems Recursively Project Pt. 4 (1hr)
#### 13-Sort.js Walkthrough
#### Problems 15-18 are challenging "bonus" questions

---

## Function Hoisting Lecture Video


**Function Hoisting**

In JavaScript, functions can be hoisted, similar to how variables are hoisted. However, how functions are hoisted depends on how they are declared.

**Variable Hoisting**

1. **Using `var`:**

   Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.

   ```javascript
   const withVar = () => {
     console.log(animal); // undefined
     var animal = "Cat";
   };

   withVar();
   ```

2. **Using `const` (or `let`):**

   Variables declared with `const` or `let` are hoisted to the top of their block scope, but they are not initialized. Accessing them before their declaration in the code will result in a Reference Error.

   ```javascript
   const withConst = () => {
     console.log(animal); // Reference Error
     const animal = "Dog";
   };

   withConst();
   ```

**Function Hoisting**

1. **Function Declarations:**

   These are hoisted to the top of their scope, and they are also initialized. This means you can call the function even before its definition.

   ```javascript
   hello(); // Outputs: "hello!"

   function hello() {
     console.log("hello!");
   }
   ```

2. **Function Expressions:**

   The behavior here depends on how the function expression's variable is declared.

   - **Using `let` or `const`:**

     ```javascript
     hello(); // Reference Error

     let hello = function() {
       console.log("hello!");
     };
     ```

   - **Using `var`:**

     ```javascript
     hello(); // Type Error (hello is not a function)

     var hello = function() {
       console.log("hello!");
     };
     ```

3. **Conflicts between Variable and Function Declarations:**

   When a variable (using `var`) and a function have the same name, the variable declaration will overwrite the function declaration.

   ```javascript
   var foo = "I'm a variable";

   function foo() {
     return "I'm a function";
   }

   console.log(foo); // Outputs: "I'm a variable"
   ```

   However, if you try doing this with `let` or `const`, you will get a syntax error because you're trying to declare the same identifier twice in the same scope.

   ```javascript
   let foo = "I'm a variable";  // Syntax Error due to the following function declaration

   function foo() {
     return "I'm a function";
   }
   ```


## IIFE and Truthy/Falsy

- Primitive Data Types Quiz
- Falsey Values in JavaScript Quiz
- IIFE Quiz

## IIFE

Immediately Invoked Function Expression

The two important pieces of an IIFE. [MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates the immediately invoked function expression ()
   through which the JavaScript engine will directly interpret the function.

```js
(function () {
  console.log("I run immediately");
})();
```

Primarily used to avoid polluting the global namespace. Useful for situations
where you only need a function to run once.

## Truthy and Falsy

Falsy Values

| Value        | Type       | Description                                                       |
|--------------|------------|-------------------------------------------------------------------|
| `null`       | Null       | The keyword null — the absence of any value.                      |
| `undefined`  | Undefined  | `undefined` — the primitive value.                                |
| `false`      | Boolean    | The keyword false.                                                |
| `NaN`        | Number     | `NaN` — not a number.                                             |
| `0`          | Number     | The Number zero, also including 0.0, 0x0, etc.                   |
| `-0`         | Number     | The Number negative zero, also including -0.0, -0x0, etc.        |
| `0n`         | BigInt     | The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n. |
| `""`         | String     | Empty string value, also including '' and ``.                     |
| `document.all`| Object    | The only falsy object in JavaScript is the built-in document.all. |


Everything else is Truthy;


## Vairables & Scope Quiz

## Try working through Whiteboarding Problem Closure

# For the rest of class and weekend:
- Work on Week 5 "Homework for Monday"

- Catch up and finish problems you haven't completed from any week.

- Allocate time to problems and concepts we've learned that you struggled with (closures, pojos, advanced arrays, ext.)

- You may encounter a "debugging" type question on your PA/Assessment. My approach was to use `console.log's` to debug these problems and find the correct answer like we've been doing in class.

- However, if you believe the debugger tool would be beneficial, consider installing it today. Please be aware that there's an installation process, and there's a learning curve associated with the debugger. It might be more efficient to allocate your time practicing recursion problems and using `console.log's`.
