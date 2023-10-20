function addNums(n){
    let sum = 0
    for (let i = 0; i < n; i++){
        sum += i
    }
    return sum
}

function addManyNums(n) {

    let total = 0;

    for (let i = 0 ; i < n ; i++) {
      total += addNums(i);
    }

    return total;
  }

function addManyNums10(increment) {
    const results = [];
    for (let i = 1; i <= 10; i++) {
        results.push(addManyNums(i * increment));
    }
    return results;
}

const increment = 10;
console.log(addManyNums10(increment));
