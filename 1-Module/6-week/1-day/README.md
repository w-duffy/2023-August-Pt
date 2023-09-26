# M1Wk6D1 Async, Node vs Browser
<br/>


## Event Loop [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

- The event loop is consited of ...
  - The Call Stack
  - The Message Queue

### Callstack recap [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions
- In order for a function to evaulate it must be placed on the call stack (pushed)
- It will then execute its code then be removed from the call stack (popped)
- LIFO (Last in First out)


### The Message Queue [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#event_loop:~:text=region%20of%20memory.-,Queue,-A%20JavaScript%20runtime)
- The message queue is the structure used to track the handling of the events
- new items are are added to the back of the line (enqueued/pushed)
- items that are being sent to the call stack are removed from the front of the line (dequeued/shift)
- FIFO (First in First out)



<br/>

## Synchronous Js vs Asynchronous JS

### Synchronous [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Synchronous)
If code is synchronous, that means that there is an inherent order among the commands and this order of execution is guaranteed.
- Synchronous code will not need to touch the message queue, and will be sent straight to the call stack to evaluate.

```
console.log("one");
console.log("two");
console.log("three");

// next example

let foo = function() {
  console.log("two");
};

console.log("one");
foo();
console.log("three");
```

<br/>

### Asynchronous [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous)
If code is asynchronous, that means that there is no guarantee in the order that the commands are executed. Asynchronous is the opposite of synchronous.

- Asynchronous code will take its place on the message queue, then be sent to the callstack to evaluate.

#### setTimeout() [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

```
setTimeout(function() {
  console.log("this didnt happen right away 0_o");
}, 1500);

// next example

console.log("start");

setTimeout(function() {
  console.log("this didnt happen right away 0_o");
}, 1500);

console.log("end");
```

## Paired Practice Until EOD
Timeout Project

<br/>


# Formative Quiz


# EOD
