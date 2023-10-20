// let arr1 = [1,2,3]
// console.log(arr1)
// arr1.shift()
// console.log(arr1)




// function testShiftTimeWithConsoleTime(n) {

//     const arr = new Array(n).fill(0);
//     console.log(arr)
//     console.time(`Shift operation for size ${n}`);
//     arr.shift();
//     console.timeEnd(`Shift operation for size ${n}`);

// }

// const sizes = [10, 100, 1000];
// sizes.forEach(testShiftTimeWithConsoleTime);


// function testShiftTime(n) {
//     // const arr = new Array(n).fill(0);
//     const arr = new Array(n).fill(0)
//     for (let i = 0; i < 100; i++) {
//         arr.pop();
//         arr.push(0);
//     }
//     // console.log("ARR", arr)
//     const startTime = performance.now();
//     arr.push();
//     const endTime = performance.now();

//     return endTime - startTime;
// }

// const sizes = [10, 100, 1000, 10000, 10_000_000];

// const times = sizes.map(size => ({ size, time: testShiftTime(size) }));

// console.table(times)

// times.forEach(data => {
//     console.log(`${data.size}`)
//     console.log(`${data.time}`)
// })

// console.table(times);


function testSliceSpace(n) {
    const arr = new Array(n).fill(0);

    let sum = 0;
    for (let i = 1; i < n; i++){
        sum += i
    }

    const memoryBefore = process.memoryUsage().heapUsed;
    const slicedArr = arr.unshift();
    const memoryAfter = process.memoryUsage().heapUsed;

    return memoryAfter - memoryBefore;
}

const sizes = [10, 100, 1000, 10000, 100000, 1_000_000_000];
const memoryUsages = sizes.map(size => ({ size, memoryIncrease: testSliceSpace(size) }));

console.table(memoryUsages);
