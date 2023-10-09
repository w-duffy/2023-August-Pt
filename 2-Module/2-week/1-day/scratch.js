// class Test {
//   testFunc() {
//     debugger;
//     console.log(this)
//     console.log(`this is equal to test1: ${this === test1}`);
//   }
// }

// const test1 = new Test();
// Calling the method on the instance
test1.testFunc(); // true
// Calling the method outside the class
const test1Func = test1.testFunc;
test1Func(); // false
// Calling the method as a callback
setTimeout(test1.testFunc, 1000); // false

// Using this in Function Declaration Syntax
function someFunc() {
  console.log(this);
}
someFunc(); // Global Object








class Government {
  constructor(name) {
    this.name = name;
    this.taxRate = 0.07;
    this.treasury = 0;
  }

  // 100
  collectTax(grossIncome) {
    let taxedAmount = grossIncome * this.taxRate;
    this.treasury += taxedAmount;
    let netIncome = grossIncome - taxedAmount;
    return netIncome
  }

  changeLegalName(newLegalName) {
    console.log(this.name)
    this.name = newLegalName;
  }
}



class Person {
  constructor(name) {
    this.name = name;
    this.bankSum = 0;
  }

  getPaid(grossIncome, collectTaxFunc) {
    // console.log(collectTaxFunc)
    let netIncome = collectTaxFunc(grossIncome)
    this.bankSum += netIncome;
  }

  printName() {

    setTimeout(() => {
      console.log(this)
      // console.log("My name is ", this.name)
    })
    // setTimeout(function(){
    //     console.log(this)
    //     // console.log("My name is ", this.name)
    // }, 1000)

  }


}



const usa = new Government("USA");
const anthony = new Person("Anthony");

// console.log(anthony) // { name: 'Anthony', bankSum: 0 }
// usa.changeLegalName.apply(anthony, ["Tony"])
// console.log(anthony) // { name: 'Tony', bankSum: 0 }


// setTimeout(anthony.printName, 1000)

anthony.printName()

// bind works on a function, to let us keep using a function from a specific instance method.

// let collectTaxFunc = usa.collectTax.bind(usa);


// console.log(collectTaxFunc)

// anthony.getPaid(100, collectTaxFunc);

// console.log(usa)
