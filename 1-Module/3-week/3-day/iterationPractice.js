// Using Obj Entries
// const obj = {
//     Jacky: "Honda",
//     Ramon: "Kia",
//     Lexi: "Mercedes",
//     Eli: "Honda",
//     Bradley: "Honda",
//     Cecily: "BMW"
// }

// const printOwners = obj => {
//     // Write your solution here.
//     let entries = Object.entries(obj)

//     for (let i = 0; i < entries.length; i++){
//         let keyValArr = entries[i]
//         if(keyValArr[0].length > 5 && keyValArr[1] === "Honda"){
//             console.log(keyValArr[0])
//         }
//     }

// }

// printOwners(obj);               // Bradley


//--------------------------------------------------------------------------------------------
//Writing object methods

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

// let arr = [];

// for (let key in obj){
//   let value = obj[key]

//   if(!arr.includes(value) && typeof value === "string"){

//     arr.push(value)
//   }
// }
// console.log(arr)

// }

// obj.printUniqueValues();               // Honda Kia Mercedes BMW



//--------------------------------------------------------------------------------------------
//refactoring iteration

const obj = {
    a: "get",
    b: "all",
    c: "of",
    d: "the",
    e: "keys"
}

const printValues = obj => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let key of Object.keys(obj)) {
        if(vowels.indexOf(key) >= 0) {
            console.log(obj[key]);
        }
    }
}

const printValuesRefactored = obj => {
    // Write your solution here.
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let key in obj) {
        if(vowels.indexOf(key) >= 0) {
            console.log(obj[key]);
        }
    }
}

printValues(obj);               // get values  -- prints "get" "keys"
printValuesRefactored(obj);     // get values -- prints "get" "keys"
