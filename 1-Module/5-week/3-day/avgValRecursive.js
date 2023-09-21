// Office hours approach:
let avgVal = (arr) => {
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  let firstEl = arr[0];
  let avg = avgVal(arr.slice(1));

  return (firstEl + avg * (arr.length - 1)) / arr.length;
};

//Default Parameters:
function avgVal(arr, i = 0, sum = 0) {
  if (i === arr.length) {
    if (arr.length === 0) {
      return null;
    }
    return sum / arr.length;
  }
  return avgVal(arr, i + 1, sum + arr[i]);
}

//Helper Func
function avgVal(arr) {
  if (arr.length === 0) return null;

  function sumHelper(arr, i) {
    if (i === arr.length) return 0;
    return arr[i] + sumHelper(arr, i + 1);
  }

  return sumHelper(arr, 0) / arr.length;
}
