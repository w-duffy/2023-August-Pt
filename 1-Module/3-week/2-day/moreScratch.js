// const obj = {
//     Jacky: "Honda",
//     Ramon: "Kia",
//     Lexi: "Mercedes",
//     Eli: "Honda",
//     Bradley: "Honda",
//     Cecily: "BMW",
//     miles: 3

// }

// // Write your solution here.
// obj.printUniqueValues = () => {
// // console.log(Object.entries(obj))
// //know im going to values

// // let keyArr = [obj]
// //need to not add duplicates
// let arr = [];

// for (let key in obj){
//   let value = obj[key]
//   // console.log(value)
//   if(!arr.includes(value) && typeof value === "string"){

//     arr.push(value)
//   }
// }
// console.log(arr)
// //  console.log(arr);
// // let answerArr = []
// //  for (let i = 0; i < arr.length; i ++){
// //   let el = arr[i];
// //   console.log(el)
// //  }

// }

// obj.printUniqueValues();               // Honda Kia Mercedes BMW


const obj = {
  first: "1",
  second: 2,
  third: "three"
}

let keyArr = Object.keys(obj)
// console.log(keyArr)

for (let i =0; i < keyArr.length; i++){
  let key = keyArr[i];
  let value = obj[key]

  console.log(value)
}

// for (let key in obj){
//   console.log(obj[key])
// }


// Write your solution here.
