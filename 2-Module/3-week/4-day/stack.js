// let myStack = []
// arr.push()
// arr.pop()
// arr.shift()
class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }
}


let billsStacks = new Stack()

billsStacks.push(1)
billsStacks.push(2)
billsStacks.push(3)
let returnedVal = billsStacks.pop()
console.log(returnedVal)
// billsStacks.unshift() //ERROR
//
// time complexity?
// space complexity?

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//stack implemented as a dynamic array:

class StackDynamicArray {

    constructor(defaultSize=4) {
      this.data = new Array(defaultSize);
      this.capacity = defaultSize;
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }
  }

let stackDynamic = new StackDynamicArray()

  stackDynamic.push(1)
  stackDynamic.push(2)
  stackDynamic.push(3)
//   stackDynamic.unshift(3) //ERROR

// time complexity?
// space complexity?

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Is this still a stack???
let stack = []

stack.push(1)
stack.push(2)
console.log(stack.pop())
// stack.unshift(1)




// some computer science seen in the readings:

// 32-bit signed integers


//1 bit is for the sign.
// The remaining 31 bits represent the magnitude of the number.
let value1 = 100_000_000

//first bit is the sign (+ or -) remaining binary representation:
// 0111-1111-1111-1111-1111-1111-1111-1111
let value2 = 2_147_483_647 //maximum value for a signed 32-bit integer


// 1000-0000-0000-0000-0000-0000-0000-0000
let value3 = 2_147_483_648  //-2147483648 smallest value for a signed 32-bit int
let value4 = -2_147_483_649


let int32Array = new Int32Array([value1, value2, value3, value4]);
console.log(int32Array)

// we're not concerned with that in JS unless you're
// doing working with binary data
// likely on performance-critical applications

let arr = [value1, value2, value3, value4]
// console.log("good ole javascript", arr)
