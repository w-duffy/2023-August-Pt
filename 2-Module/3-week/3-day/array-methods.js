
function testShiftTime(n) {
    const arr = new Array(n).fill(0);
    const startTime = performance.now();
    arr.push(2);
    const endTime = performance.now();
    return endTime - startTime;
}
const sizes = [10, 100, 1000, 10000, 100000, 1_000_000, 10_0000];
const times = sizes.map(size => ({ size, time: testShiftTime(size) }));

console.table(times)

// function testPopTime(n) {
//     const arr = new Array(n).fill(0);


//     for (let i = 0; i < 100; i++) {
//         arr.pop();
//         arr.push(0);
//     }

//     const startTime = performance.now();
//     arr.push(1);
//     const endTime = performance.now();

//     return endTime - startTime;
// }

// const sizes = [10, 100, 1000, 10000, 100000, 1_000_000, 0_010_0000];
// const times = sizes.map(size => ({ size, time: testPopTime(size) }));

// console.table(times)




function testShiftTime(n) {
    const arr = new Array(n).fill(0);
    // arr.unshift(1)
    for (let i = 0; i < 100; i++) {
        arr.pop();
        arr.push(0);
    }

    const startTime = performance.now();
    console.log("1", arr)
    arr.shift();
    console.log("2", arr[0])
    const endTime = performance.now();
    return endTime - startTime;
}

// const sizeShift = [10, 100_000_000];

// const timesShift = sizeShift.map(size => ({ size, time: testShiftTime(size) }));
// console.table(timesShift)
