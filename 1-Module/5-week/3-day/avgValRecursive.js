// Purely recursive solution from office hours during EST:
let avgVal = (arr) => {
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  let firstEl = arr[0];
  let avg = avgVal(arr.slice(1));

  return (firstEl + avg * (arr.length - 1)) / arr.length;
};

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

// ---------------------------------------------------------------------------------------

// Recursion using default parameters:
function avgVal(arr, i = 0, sum = 0) {
  if (i === arr.length) {
    if (arr.length === 0) {
      return null;
    }
    return sum / arr.length;
  }
  return avgVal(arr, i + 1, sum + arr[i]);
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

// ---------------------------------------------------------------------------------------

// Recursive Helper Func
function sumHelper(arr, i) {
  if (i === arr.length) return 0;
  return arr[i] + sumHelper(arr, i + 1);
}

function avgVal(arr) {
  if (arr.length === 0) return null;
  return sumHelper(arr, 0) / arr.length;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

// ---------------------------------------------------------------------------------------

// Recursive closure solution
function avgVal(arr) {
  if (arr.length === 0) return null;

  function sumHelper(i) {
    if (i === arr.length) return 0;
    return arr[i] + sumHelper(i + 1);
  }

  return sumHelper(0) / arr.length;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

// ---------------------------------------------------------------------------------------

// recursive callback function
function avgVal(arr, callback) {
  if (arr.length === 0) return null;

  const sum = callback(arr, 0);
  return sum / arr.length;
}

function recursiveSum(arr, index) {
  if (index === arr.length) return 0;
  return arr[index] + recursiveSum(arr, index + 1);
}

console.log(avgVal([5, 10], recursiveSum)); // 7.5
console.log(avgVal([3, 7, 2, 1, 2], recursiveSum)); // 3
console.log(avgVal([], recursiveSum)); // null
