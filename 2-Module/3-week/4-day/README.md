# Arrays && Stacks continued:

## But First: Pop Quiz

### Pop quiz 1 - what is the time complexity of the below function?

1. O(n^2)
2. O(n)
3. O(nlogn)
4. O(2n)


```js

function popQuiz1(n) {
    let arr = new Array(n).fill(0)

  for (let i = 0 ; i < arr.length ; i++) {
    arr.forEach(el =>{
        console.log("Advanced abstraction")
    })
  }

  let mapped = arr.map(el => 1)
  console.log(mapped)
}

```

### Pop quiz 2 - what is the time complexity?

1. O(n^2)
2. O(2n)
3. O(n)
4. O(n^2 + n)

```js

function popQuiz2(input) {

    let arr = ["n"]
    let sum = 0
    for (let i = 0 ; i < input ; i++) {

        arr.forEach(el =>{
            console.log(arr[0])
        });
    };

    for (let i = 0; i < arr.length; i++){
        sum += 1
    };
    return sum
}

```

### Pop quiz 3 - what is the time complexity?

1. O(n^2)
2. O(n^3)
3. O(n)
4. O(n^2 + n)

```js

function popQuiz3(n) {

    let arr = [2];
    let sum = 0;
    for (let i = 0 ; i < n ; i++) {
        arr.filter(el =>{
            if (el % 2 === 0){
                return true;
            };
        });
    };

    for (let i = 0; i < n; i++){
        let idx = 0;
        while(idx < n){
            arr.unshift(1);
            idx++;
        };
    };
    return sum;
}

```


## Arrays - Computer Science Definition:
An array is a **sequence** of elements of the **same** type stored in a **contiguous block of memory**.
A base array has to be defined with the type of value it will hold, and a preset length
The size can not be increased or decreased

## Dynamic Arrays - Like Arrays, but allow allows addition and removal of values... at a cost
While base arrays keep things very strict and dont allow us to add or remove elements, dynamic arrays can
Dynamic Arrays we are able to create, increase or decrease our elements which makes our lives easier as programmers

## Stacks

A stack is an *abstract data type* (ADT) that stores a collection of data

- LIFO
  - Add = push
  - Remove = pop
- Implemented with an array under the hood eg. `const stack = [];` and push and pop elements on that array
- Browser history, undo/redo
- *Time complexity*
  - *If memory has been allocated* for the array then adding and removing elements and also checking the size of the stack will be a **Constant O(1) operation**
  - *If not*, it could be a **Linear O(n)** operation in the worst case scenario
- *Space complexity* of a stack is **Linear O(n)**, because we need `n` array slots to store `n` variables

### **Quick note on Recursion**

- **Minimum space complexity of Linear O(n)**
  - If space is an issue, and your input is large, it's usually better to use an iterative solution


## Arrays -- Indexing

- Allow us to access elements through `indexing`
  - This is **fast**
- Want the element at index 5? Move the pointer to the correct location and read the data
    - Indexing an array is a **Constant O(1) operation**
    - Since the indices are numerical, the array must be stored in an **ordered sequence of memory addresses**


# Memory
Computer memory is where data is stored temporarily or permanently. There are two main types: RAM (Random Access Memory) and storage (like SSDs and HDDs). RAM is fast and volatile, meaning it loses its data when the power is off. It's where the computer keeps data it's currently using. Storage, on the other hand, retains data even when powered off, like saving files. The more RAM a computer has, the more tasks it can handle simultaneously. SSDs (Solid State Drives) are faster than traditional HDDs (Hard Disk Drives) because they use flash memory, lacking moving parts. Efficient memory usage is crucial for optimal software performance.

## Let's take a look at memory in action!

### Story Time -- the programmer with too many tabs


## RAM -- Not the truck

- What does it hold?
  - bits, 1s and 0s, in the form of electrical charge
- Is it slow or fast?
  - fast, to read and write
- Persistent or volatile?
  - volatile
    - HDDs and SSDs are for long-term storage
  - needs a constant electric power source to retain information
- Cheap or expensive compared to hard disk storage?
  - expensive
- How do we access or refer to it?
  - memory addresses, pointers, references

- Pointers
  - A pointer is a variable that stores the memory address of another variable as its value.

- References
  - A reference variable provides a new name to an existing variable.



<br/>


### Key Logic and Truth Points

- ! = not
- && = both conditions are true
- || = one or both conditions are true
- XOR ( ^ ) = exclusive or, one is true, but not both

- True can be represented by 1, and false by 0.

- De Morgan's Law:
  !(A && B) === !A || !B

```plaintext
A | B XOR
-----
T | T  => F
T | F  => T
F | T  => T
F | F  => F
```

### Binary, base 10

You learned to count in a base 10 system. All numbers are based on a 0-9
counting pattern.
0, 1, 2, 3, 4, 5, 6, 7, 8, 9....

- when you get to the last digit, you simply increase the number to the left and
 start over from 0

### Binary, base 2

- 2 Key points:
  - binary is all 0s and 1s
  - binary digits are called bits
    - a group of 8 bits is a byte

#### How to count in binary

0000 - 0
0001 - 1
0010 - 2
0011 - 3
0100 - 4
0101 - 5
0110 - 6
0111 - 7
1000 - 8

- The pattern is: 0 and 1 are the same a base 10, but then you run out of digits.
  - The right most digit returns to 0 and the digit to the left increments by 1
- '0b' prefix identifies string/num as binary:  0b0100 -> 4
- Avoids confusion, 8 -> 0b1000 to differentiate from base 10 number 1000

### Converting from binary to decimal (base 10)

Formula: Multiply each digit by the number base raised to the nth power, where n
is its position _starting from the right_. Then, add all of the results together.

Charles -- "It unshifts the new characters instead of pushing"

To convert 0b11001010 to decimal, remember the base is 2:

2^0 *0 = 0
2^1* 1 = 2
2^2 *0 = 0
2^3* 1 = 8
2^4 *0 = 0
2^5* 0 = 0
2^6 *1 = 64
2^7* 1 = 128

Add all of those sums together to get 2 + 8 + 64 + 128 = 202


### Base 16 - Hexadecimal

hex = 6, dec = 10, hence hexadecimal (6 + 10 = 16)

Counting follows this pattern:
The digits are 0-9 with A, B, C, D, E and F representing 10, 11, 12, 13, 14 and
15, respectively. Hexadecimal numbers (sometimes called 'hex' for short) are
prepended with an '0x' to differentiate them as base-16.

- Hexadecimal is often used as shorthand for representing binary values:
  - one hex digit can represent four bits.

 0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF
16 = 0x10
17 = 0x11
18 = 0x12
19 = 0x13
20 = 0x14
21 = 0x15
22 = 0x16
23 = 0x17
24 = 0x18

To convert A1 from hexadecimal to decimal, we use the same formula as above:

16^0 *1 =    1* 1 = 1
16^1 *a (10) =   16*  10 = 160

160 + 1 = 161

To convert the hex number 0xF23C:
16^0 *C =    1* 12 = 12
16^1 *3 =   16*  3 = 48
16^2 *2 =  256*  2 = 512
16^3 *F = 4096* 15 = 61440

Add the sums together to get 61440 + 512 + 48 + 12 = 62012


### Bytes, kilobytes, megabytes, gigabytes, terabytes

1 byte = 8 bits

#### And some more - we *may* have heard in school:

kilo - thousand
mega - million
giga - billion
tera - trillion
peta - quadrillion
exa - quintillion
zetta - sextillion
yotta - septillion


# Good news below!


## Using Javascript Builtin Conversions
There are several built-in JavaScript conversion methods can be used for converting binary. Each one has its specific use cases.

### parseInt()[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

```
parseInt('a1', 16);  // 161
parseInt(`1011`, 2); // 11
```

### toString()[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
The toString() method of Number values returns a string representing this number value.

```
const decimal = parseInt('a1', 16); // 161
const hexadecimal = decimal.toString(16); // 'a1'
const binary = decimal.toString(2) // '10100001'
```

## ASCII:

### Representing letters in binary (ASCII) [Docs](https://www.asciitable.com/)
To represent characters, each byte value is matched up with a character according to a standard encoding. The most common English standard is ASCII, which stands for "American Standard Code for Information Interchange".

-   `String.fromCharCode()`

```javascript
console.log(String.fromCharCode(65)); // = A;
console.log(String.fromCharCode(66)); // = B;
console.log(String.fromCharCode(67)); // = C;
```

-   `String.prototype.charCodeAt()`

```javascript
const str = 'ABC';
console.log(str.charCodeAt(0)); // 65 => A;
console.log(str.charCodeAt(1)); // 66 => B;
console.log(str.charCodeAt(2)); // 67 => C;
```

## More Built in JavaScript Conversion Methods:

```javascript
// Convert Hexadecimal to Base10 & back`
let num = parseInt('0xa1', 16); // 161
let str = num.toString(16); // 'a1'
```

### String.fromCharCode()[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units (16-bit Unicode Transformation Format)

```
String.fromCharCode(65); // A;
String.fromCharCode(66); // B;
String.fromCharCode(67); // C;
```

### String.prototype.charCodeAt()[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

```
const str = 'ABC';
const str = 'ABC';
str.charCodeAt(0); // 65
str.charCodeAt(1); // 66
str.charCodeAt(2); // 67
```

<br/>

### Paired Practices
- Binary and Hexadecimal Practice

- Advanced Conversion Functions
