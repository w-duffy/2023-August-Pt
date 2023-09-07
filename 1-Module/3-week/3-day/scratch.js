// let average = function (num1, num2) {
//     let avg = (num1 + num2) / 2;
//     return avg;
//   };

//   console.log("HERE")




//   // arrow function equivelant
//   let averageArrow = (num1, num2) => {
//     let avg = (num1 + num2) / 2;
//     return avg;
//   };

//   console.log("Here", averageArrow(3, 7));

  // arrow function with implicit return
  // let averageArrow = (num1, num2) => (num1 + num2) / 2;

  // console.log(averageArrow(3, 7));

  //keying into arr example
  // let arr = [1, "string", {}, averageArrow];

  // console.log(arr[0]);

  // keying into objects examples
  // let obj = {
  //   name: "Edward",
  //   lastName: "Felipe",
  // };

  // console.log(obj);

  // console.log(obj);


  let obj = {
    firstName: "Will",
    // lastName: "Duffy",
    // dog: "Lucky",
    // hobbies: ["coding", "hiking", "video games"],
    examp: {nestedKey: "nestedVal"},
  };



//   console.log(obj.firstName)
//   console.log(obj[firstName])

  let firstName = "test"


console.log("1: ", obj[firstName])
console.log("1: ", obj["test"])

console.log("2: ", obj.firstName)
console.log("2: ", obj."test")
//   console.log(obj)



// //   let examp = "examp"
// //   console.log(obj.examp.nestedKey)
// //   console.log(obj["examp"]["nestedKey"])

//   for (let key in obj){

//     let value = obj[key]

//     // console.log("outer", value)
//     for (let key in ){

//         console.log("nested", value[key])
//     }

//   }













// // person["newKey"] = 50
// let newKey = "newKey";
// // console.log(newKey)

// // person["test"] = 50 //after the variable evaluates to it's value

// // person[newKey] = 50 //before
// person[newKey] = 50 //before

// console.log("test", person)
// person["newKey"] = 50

// person.newVar = 6
// person.whatEverIWanted = 50

// console.log(person.newKey)
// console.log(person["firstName"])



//   console.log("1: ",person["age"])
//   console.log(person)

//   let arr = [1,2,3]
//   arr.push(4)

// for(let key in person){
//     console.log(typeof key)
// }
//   console.log(person);

  // let arr = person.hobbies;

  // console.log(arr);

  // arr.push("watching anime");
  // console.log(arr, person);

  // let copy = person.hobbies.slice();

  // copy.push("watching anime");

  // console.log(copy, person);


  // let person = {
  //   firstName: "Will",
  //   lastName: "Duffy",
  //   dog: "Lucky",
  //
  //   hobbies: ["coding", "hiking", "video games"],
  // };


  // // keying in with bracket notation
  // // let namee = "firstName";
  // console.log(person.firstName);
  // console.log(person["firstName"]);
  // console.log(person[namee]);

  // let car = {};

  // let colorVar = "color";

  // car.colorVar = "blue";

  // car.color = "blue"; ✅

  // car[colorVar] = "blue"; ✅

  // car[0] = "blue";

  // console.log(car);

  // let cat = {};
  // let myKey = "color";

  // cat.myKey = "orange";

  // console.log(cat.myKey);


  // let person = {
  //   firstName: "Will",
  //   lastName: "Duffy",
  //   dog: "Lucky",
  //
  //   hobbies: ["coding", "hiking", "video games"],
  // };

  // for (let i = 0; i < person.length; i++) {
  //   console.log("were running");
  // }

  // console.log(person.length);

  // for (let key in person) {
  //   console.log(key, person[key]);

  // }

  // let person = {
  //   firstName: "Will",
  //   lastName: "Duffy",
  //   dog: "Lucky",
  //
  //   hobbies: ["coding", "hiking", "video games"],
  //   printName: (name) => console.log(name),
  // };

  // person.printName("edward");

  // console.log(Object.keys(person));
  // console.log(Object.values(person));
  // console.log(Object.entries(person));

  // let values = Object.values(person);

  // console.log(values);

  // for (let i = 0; i < values.length; i++) {
  //   let value = values[i];
  //   if (value === "Duffy") {
  //     return console.log("we got it", i);
  //   }

  // }

  // let person = {
  //   firstName: "Will",
  //   lastName: "Duffy",
  //   dog: "Lucky",

  //   hobbies: ["coding", "hiking", "video games"],
  //   printName: (name) => console.log(name),
  // };


  // let hobbies = ["coding", "hiking", "video games"];

  // for (let key in person) {
  //   console.log(key);
  // }
  // person.printName("Will")
  // person.newFuncyFunc = (name) =>{
  //   console.log("YO YO", name)
  // }
  // person.newFuncyFunc("will")

  // person["yeetFuncyFunc"] = function cool(name) {
  //   console.log("YEET", name)
  // }

  // person.yeetFuncyFunc("will")
  // person[1] = "TEST"

  // for (let key in person) {
  //   console.log(typeof key, key);
  // }
  // console.log(person)
