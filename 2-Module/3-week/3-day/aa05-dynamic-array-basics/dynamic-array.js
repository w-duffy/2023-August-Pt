class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    if (index >= this.length) return undefined;
    return this.data[index];
  }

  unshift(val) {

    for (let i = this.length ; i > 0 ; i--) {
      this.data[i] = this.data[i-1];
    }

    this.data[0] = val;
    this.length++;
  }
}

// console.log(arr1)
let myCustomArr = new DynamicArray()

myCustomArr.unshift(1)
myCustomArr.unshift(2)
myCustomArr.unshift(3)
myCustomArr.unshift(4)
myCustomArr.unshift(5)
console.log(myCustomArr.data)
// arr.unshift(1)
// console.log(arr.data)



// arr.unshift(1)
// arr.unshift(1)
// arr.unshift(1)
// arr.unshift(1)
// arr.data[0] = 1
// arr.data[1] = 2
// arr.data[2] = 3
// arr.data[3] = 4
// console.log(arr.unshift(2))



module.exports = DynamicArray;
