function addNums(n){
    let sum = 0
    for (let i = 0; i < n; i++){
        sum += i
    }
    return sum
}

let start4 = performance.now()
addNums(300);
let end4 = performance.now()

// console.time("Addnums")
// console.timeEnd("Addnums")


console.log(`addNums took ${end4 - start4}ms`);
