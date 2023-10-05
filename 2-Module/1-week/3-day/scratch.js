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


//make an object that holds all the ingredients in a pbj


class Sandwich {
  constructor(bread, middles = [], spreads = []) {
    this.bread = bread;
    this.middles = middles;
    this.spreads = spreads;
  }

  addSpread(spread) {
    this.spreads.push(spread);
  }

  addMiddle(middle) {
    this.middles.push(middle)
  }

  readIngredients() {

    let ingredients = ""
    let condiments = '';

    for (let middle of this.middles) {
      ingredients += ` ${middle} `
    }
    for (let spread of this.spreads) {
      condiments += ` ${spread} `
    }
    // console.log(ingredients)
    console.log(`The Sandwich uses ${this.bread} bread and has ${ingredients} for middle and has ${condiments}`)
  }


}



let pbj = new Sandwich('white')
let italianSandwich = new Sandwich('white')


pbj.addSpread('peanutbutter')
pbj.addSpread('jelly')

italianSandwich.addSpread('mayo')
italianSandwich.addMiddle('pepperoni');
italianSandwich.addMiddle('ham')

pbj.readIngredients()
// italianSandwich.readIngredients()

// console.log(pbj)
// console.log(italianSandwich, "this is my italian")



class Sub extends Sandwich {
  constructor(bread, middle, spread, topping, veggie) {
    super(bread, middle, spread)
    this.topping = topping;
    this.veggie = veggie;
  }
}

// class GluttenFreeSandwich extends Sandwich {
//     constructor(bread, middle, spread, price){
//         super(bread, middle, spread)
//         this.price = price || 50
//     }
// }


// let mygluttonfreeSandwich = new GluttenFreeSandwich("lettuce", "chicken", "ketchup", 30)

// // console.log(mygluttonfreeSandwich)

// // let hamSandwich = new Sandwich('bread', 'ham', 'mustard')
// let chickenTenderSub = new Sub('wheat', 'Chicken', 'mayo', 'bacon', 'onion')


// chickenTenderSub.readIngredients();

// console.log(chickenTenderSub)



// // console.log(hamSandwich)
// // console.log(pbj)
// // console.log(turkeySandwich)
