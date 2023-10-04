// let obj = {name: "Will", newProperty: "whatever"}

// let arr = new Array(1, 2, 3)
let arr1 = [1,2,3]
let arr2 = [1,2,3,4]
let arr3 = [1,2,3,4]

// console.log(arr1.pop)

let func = arr1.pop
// console.log(func)
func()
// let arr2 = new Array(1, 2, 3)

// console.log("ARR", arr)
// console.log("ARR LENGTH", arr.length)
// console.log(arr.pop)
// console.log("ARR after pop", arr)




function myFunc(title, series, author){
    console.log("example: ", title, series, author)
}

// myFunc("harry potter", "hp", "JKR")

function myFunc(){

}


class FacebookUser {
    constructor(userName, email, password) {
      this.userName = userName;
      this.email = email;
      this.password = password;

    }

    sayHi(){
        // console.log()
        return `Hi I'm ${this.userName} `
    }

    sayHiToUser(someUser){
        return `hi, ${someUser.userName}`
    }
  }

let newUserInstance1 = new FacebookUser("Will", "will@will.com", "12345")
let newUserInstance2 = new FacebookUser("sally", "sally@will.com", "12345")
let newUserInstance3 = new FacebookUser("bob", "bob@will.com", "12345")


console.log(newUserInstance1.sayHi())
// console.log(newUserInstance2)
// console.log(newUserInstance3.sayHiToUser(newUserInstance1))




// console.log(Array.isArray())





// class Player {
//     constructor(name, position, number) {
//         this.name = name;
//         this.position = position; // For example: "Quarterback", "Wide Receiver", "Linebacker" etc.
//         this.number = number;
//     }

//     displayInfo() {
//         console.log(`Player Name: ${this.name}`);
//         console.log(`Position: ${this.position}`);
//         console.log(`Jersey Number: ${this.number}`);
//     }

//     changeJersey(newNumber) {
//         this.number = newNumber;
//         console.log(`${this.name} now wears jersey #${this.number}`);
//     }
// }
