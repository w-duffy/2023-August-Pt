function addNums(n){
    let sum = 0
    for (let i = 0; i < n; i++){
        sum += i
    }
    return sum
}


function addNums10(increment) {
    const result = [];
    for (let i = increment; i <= 10 * increment; i += increment) {
        result.push(addNums(i));
    }
    return result;
}

const increment = 1;
console.log(addNums10(increment)); // prints [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
