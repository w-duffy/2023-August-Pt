/*
Nested objects
Given an object that has other objects nested inside of it, write a function
that takes that object and returns all values that are at a depth of 2.
*/



const nestedArr = [
    [
        { a: 1 },
        { b: 2 }
    ],
    [
        { c: 3 },
        { d: 4 },
        { e: 5 }
    ],
    [
        { f: 6 }
    ],
    [
        { g: 7 },
        { h: 8 }
    ]
];

const getSecondObjValues = arr => {
    // Write your solution here.
}

getSecondObjValues(nestedArr);               // 2 4 null 8
