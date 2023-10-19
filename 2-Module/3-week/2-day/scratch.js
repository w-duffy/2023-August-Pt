//Time Complexity

// let arr = [1, 2, 3, 4, 5];
// let start = performance.now()
// console.log(arr[2]);  // O(1)
// let end = performance.now()

function printAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);  // O(n)
    }
}



function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);  // O(n^2)
        }
    }
}
// printPairs("Print pairs")

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function cFuncTime (n){
//     let num = n
//     return num
// }

// let start3 = performance.now()
// cFuncTime(10000000)
// let end3 = performance.now()

// console.log(`addNums took ${end3 - start3}ms`);





function addNums(n){
    let sum = 0
    for (let i = 0; i < n; i++){
        sum += i
    }
    return sum
}

// console.time("Addnums")
// addNums(1_000_000_000)
// console.timeEnd("Addnums")





function addManyNums(n) {
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        totalSum += addNums(i);
    }
    return totalSum;
}


// console.time("addManyNums")
// addManyNums(1_000_000);
// console.timeEnd("addManyNums")


function stack(n){
    if(n === 0){
        return;
    }
    return stack(--n);

}
// // stack()
stack(11_0700)



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Space Complexity
function constantSpace(n) {
    let a = 5;
    let b = 10;
    return a + b + n;
}

constantSpace(100);


function linearSpace(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

linearSpace(5); // [0, 1, 2, 3, 4]


function quadraticSpace(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i].push(j);
        }
    }
    return matrix;
}

// console.time("Addnums")
// let start = performance.now()
// quadraticSpace(5000);
// let end = performance.now()
// console.log(`Quadratic took ${end - start}ms`);
// console.timeEnd("Addnums")
// [
//  [0, 1, 2],
//  [0, 1, 2],
//  [0, 1, 2]
// ]
