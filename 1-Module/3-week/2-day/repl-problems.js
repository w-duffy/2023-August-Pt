// let cat = {};
// let myKey = "color";

// cat.myKey = "orange";
// console.log(cat.myKey); // => ???


// let dog = {};

// dog.name = "Lily";
// console.log(dog["name"])


//car.color = "blue"
// let car = {};

// let colorVar = "color";

// // car["color"] = "blue"
// // car[colorVar] = "blue"

// car.colorVar = "blue"
// // car."color" = "blue"
// console.log(car)

// let manager = {};

// manager["salary"] = "$$$"

// console.log(manager.salary)

// let cat = { name: "Bruno" };

// let catName = "name";

// console.log(cat[catName])
// console.log(cat["name"])
// console.log(cat.name)

// let bear = { growl: "RAWR" };
// console.log(bear);
// bear.growl = "not rawr"

// console.log(bear);

// if(bear["yell"] === undefined){
//     bear["yell"] = "new value"
// }
// console.log(bear)

// let arr = [1,2,3]


// arr.split("")
// arr.push("")
// arr.join(" ")
// arr.slice(" ")

// let lion = { name: "Simba" };

// console.log(lion["color"] === undefined)


// let cat = { name: "Bruno" };

// let catName = "name";

// console.log(cat.name)
// console.log(cat["name"])
// console.log(cat[catName])



// let bear = { growl: "RAWR" };

// console.log("1:", bear["age"]);
/*
Write a function catBuilder(name, color, toys)
that returns a cat object object with the corresponding properties.
*/

// function catBuilder(name, color, toys) {
    // your code here...
    // return  {
        //     name: name,
    //     color: color,
    //     toys: toys
    // };

    // return  {
    //     name,
    //     color,
    //     toys
    // };

//     let obj = {}
//     // obj.name = name
//     // obj.color = color
//     // obj.toys = toys
//     obj["name"] = name
//     obj.color = color
//     obj.toys = toys



//     return obj
//   }

//   console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
//   // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

//   console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
//   // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }






/*
Array of Objects
In this practice, you will practice navigating objects that are nested within
an array. Given the below array, write a function printNames that prints the
name of every object in the array.

*/
//   const users = [
//     {
//         name: "Gerald",
//         age: 23,
//         height: 68
//     },
//     {
//         name: "Winnie",
//         age: 35,
//         height: 62
//     },
//     {
//         name: "Peter",
//         age: 61,
//         height: 72
//     }
// ]


//   const users = [
//     {
//         name: "Gerald",
//         age: 23,
//         height: 68
//     },

// ]

// const printNames = users => {
//     // Write your solution here.
// // for (let i = 0; i < users.length; i++){
// //     let user = users[i];
// //     let name = user["name"];
// //     console.log(user["name"])

//     for (let user of users){
//         console.log("FLAG", users[user])
//         let userObj = users[user]

//         for(let key in userObj){
//             console.log(userObj[key])
//         }


//         // console.log(names)
//     }
// // }

// }

// printNames(users)      // Gerald Winnie Peter
