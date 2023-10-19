


function someFunc(n){

    let sum = 0;
    for (let i = 1; i < n; i++){
        sum += i
    }
    return sum
}

let start = performance.now()
someFunc(10)
let end = performance.now()

console.log(end - start)
