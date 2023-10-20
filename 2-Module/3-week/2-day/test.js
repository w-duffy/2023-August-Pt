function exampleFunction(n) {
    // This part has a time complexity of O(n^2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`Pair: (${i}, ${j})`);
        }
    }

    // This part has a time complexity of O(n)
    for (let k = 0; k < n; k++) {
        console.log(`Single: ${k}`);
    }
}

exampleFunction(5);
