# W8D2 - Context & TDD
- We are working 1 day ahead of schedule this week so that you can be prepared for the PA on Saturday

- This Saturday will be entirely dedicated to the PA and Solo review.  So Friday and Saturday are excellent days to ensure you're prepared for Monday's Assessment

<br/>

## Context (Review) [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
Refresher from Saturday: Context refers to the value of the this keyword when code is executed.


### bind() [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

### Call [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
The call() method of Function instances calls this function with a given this value and arguments provided individually.

### Apply [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).


```
class Cat {
  constructor(name, toys) {
    this.name = name;
    this.toys = toys;
  }
  purr() {
    console.log(`${this.name} goes meow`);
  }

  purrMore() {
    this.purr();
  }
}

let cat = new Cat("tommySocks", [
  "laser pointer",
  "flopping fish",
  "anything on the edge of a counter",
]);

// This doesn't work:
let lostContextFunc = cat.purrMore
lostContextFunc() // TypeError

// //solving with bind
const unboundPurrMore = cat.purrMore;
const boundPurrMore = unboundPurrMore.bind(cat);
global.setTimeout(boundPurrMore, 5000);

// // solving with call

// // call will actually invoke the method so we have to use an arrow to make a callback
global.setTimeout(() => cat.purrMore.call(cat), 5000);
cat.purrMore.call(cat);

// // solving with apply

// // apply will actually invoke the method so we have to use an arrow to make a callback
global.setTimeout(() => cat.purrMore.apply(cat), 5000);
cat.purrMore.apply(cat);

class Dog {
  constructor(name, toys) {
    this.name = name;
    this.toys = toys;
  }

  static logToys(toys) {
    console.log(`These are ${this.name}'s favorite toys`);
    for (let toy of toys) {
      console.log(toy);
    }
  }
}

const paisley = new Dog("Paisley", [
  "sriracha bottle",
  "burrito",
  "creepy lamb thing",
]);

cat.purrMore.call(paisley);

const paisleyMeows = cat.purr.bind(paisley);
paisleyMeows();
cat.purr.apply(paisley);
cat.purr.call(paisley);

Dog.logToys.apply(paisley, paisley.toys);
Dog.logToys.call(paisley, paisley.toys);

console.log(cat.toys);

Dog.logToys.apply(cat, [paisley.toys]);
Dog.logToys.call(cat, paisley.toys);
```

### Arrow Functions

- Arrow func properties are "auto-bound methods"

```
// Arrow Funcs are "auto-bond methods"
class C {
  a = 1;
  autoBoundMethod = () => {
    console.log(this.a);
  };
}

const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
// If it were a normal method, it should be undefined in this case
autoBoundMethod(); // 1


//The above arrow func method is equivalent to the below:
// class C {
//   a = 1;
//   constructor() {
//     this.method = this.method.bind(this);
//   }
//   method() {
//     console.log(this.a);
//   }
// }

```

<br/>

# Work on Context Project Phases 4 - 11
- Try and solve these problems using the readme and test specs
- Most of these problems don't require elaborate solutions, so ask a question if you're stuck!
- MDN is **very** useful

# For Homework before Tuesday's class, complete the content under "Homework for Wednesday"
