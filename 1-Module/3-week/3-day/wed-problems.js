//ITERATING THROUGH AN OBJECT USING A FOR..IN LOOP

// function printObject(obj) {
//     // your code here...
//     for (let key in obj){
//         let value = obj[key]
//        console.log(key + " - " + value)
//     }
//   }


//   let bootcamp = {
//     name: "App Academy",
//     color: "Red",
//     population: 120
//   };

//   printObject(bootcamp); // prints
//   // name - App Academy
//   // color - Red
//   // population - 120









// const obj = {
//     Jacky: "Honda",
//     Ramon: "Kia",
//     Lexi: "Mercedes",
//     Eli: "Honda",
//     Bradley: "Honda",
//     Cecily: "BMW",
//     bobby: "Civic"
// }

// // //print owners names that begin with "B"

// const printOwners = obj => {

//     let keyValArr3 = Object.entries(obj);
//   for (let i = 0; i < keyValArr3.length; i++){
//             let nestedArr = keyValArr3[i]
//     //     // console.log(nestedArr)
//         let key = nestedArr[0]
//         // let value = nestedArr[1]
//         if(key[0] === "B" || key[0] === "b"){
//             console.log(key)
//         }
//     //     console.log("key: ", key)
// }
//     // Write your solution here.

//     // for (const [owner, carBrand] of Object.entries(obj)){
//     //     if(owner[0] === "B"){
//     //         console.log(owner)

//     //     }
//     // }

// }
// printOwners(obj);               // Bradley
    // let keyValArr1 = Object.keys(obj);
    // let keyValArr2 = Object.values(obj);

    // let keyValArr3 = Object.entries(obj);

    // for (let i = 0; i < keyValArr3.length; i++){
    //     let nestedArr = keyValArr3[i]
    //     // console.log(nestedArr)
    //     let key = nestedArr[0]
    //     let value = nestedArr[1]
    //     console.log("key: ", key)
    //     console.log("val: ", value)





// //print The name of the Honda owner
// printOwners(obj);               // Eli



// // //print Lexi's car name
// printOwners(obj);               // Bradley

// // // //print The name of the Honda owner
// printOwners(obj);               // Eli

    // console.log("keys: ", keyValArr1)
    // console.log("values: ", keyValArr2)
    // console.log("entries: ", keyValArr3)





// const printOwners = obj => {
//     // Write your solution here.
//     let keyValArr1 = Object.keys(obj);
//     // let keyValArr2 = Object.values(obj);
//     // let keyValArr3 = Object.entries(obj);
//     console.log("keys: ", keyValArr1)

//     //could have used a for loop

//     for (let i = 0; i < keyValArr1.length; i++){
//         let name = keyValArr1[i]
//         // console.log(name)
//         if(name[0] === "B"){
//             console.log(name)
//         }
//         // Object.keys(obj).filter((x) => ‘bB’.includes(x[0]) === true)
//     }
//     // console.log("values: ", keyValArr2)
//     // console.log("entries: ", keyValArr3)
// }










/*
Writing Object Methods
Given an object, obj, declare a method, printValues on obj that prints all unique values within the object.


*/

const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}


obj.printUniqueValues();               // Honda Kia Mercedes BMW
