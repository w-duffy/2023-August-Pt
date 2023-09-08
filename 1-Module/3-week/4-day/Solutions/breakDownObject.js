/*
Break down object
Write a function breakDownObj(obj) that takes in an object as a parameter
and returns an array containing:  all the keys from the object and all the
values of the object.



Hint: Use spread syntax to spread out elements into an array!

*/


let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
let object2 = {location: 'NY', borough: 'Brooklyn'};

// const breakDownObj = obj => [...Object.keys(obj), ...Object.values(obj)]


const breakDownObj = obj => [...Object.keys(obj),...Object.values(obj)]

// let keys = Object.keys(obj);
// let values = Object.values(obj);
// return [...keys, ...values]


console.log(breakDownObj(object1));          // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
console.log(breakDownObj(object2));          // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


  // Your code here
//   let keyArr = []

//   let valArr = []

// for (let keys in obj){

//   let val = obj[keys]
//   keyArr.push(keys)
//   valArr.push(val)

// }

// return [...keyArr, ...valArr]

// let keys = Object.keys(obj)
// let values = Object.values(obj)
// return [...Object.keys(obj), ...Object.values(obj)]

// }


// console.log(breakDownObj(object1));          // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
// console.log(breakDownObj(object2));          // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
