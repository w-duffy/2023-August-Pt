//Function that creates an object with properties named "randomFood" and "name"
let maker = function (name, randomFood) {
  let obj = {};
  obj.name = name;
  obj.randomFood = randomFood;
  return obj;
};
console.log(maker("Will", "taco"));

//Class that will create instances with name and randomFood properties
class ClassMaker {
  constructor(name, randomFood) {
    this.name = name;
    this.randomFood = randomFood;
  }
}
console.log(new ClassMaker("Will", "taco"));

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

//Function that creates and returns an object that has a sayHello method
let myObjWithMethodCreator = function () {
  let obj = {};
  obj.sayHello = function () {
    console.log("hello world!");
  };
  return obj;
};
let objWithMethod = myObjWithMethodCreator();
objWithMethod.sayHello();

//Class that will create instances that have a sayHello method
class InstanceWithMethodCreator {
  constructor(){
    //normally we'll define properties, but this is fine.
  }
  sayHello() {
    console.log("hello world!");
  }
}
let classInstanceWithMethod = new InstanceWithMethodCreator();
classInstanceWithMethod.sayHello();


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

//creating an array and using the push method to add food strings
let globalArr = []
globalArr.push("Queso", "Salsa", "Chicken")
console.log(globalArr)

// Creating an object with a 'myArray' property.
// Using push to add food strings to this array.
let globalObj = {myArray: []}
globalObj.myArray.push("Queso", "Salsa", "Chicken")
console.log(globalObj)

//Function that creates and returns an object that has a key of myArray whose value is an array
let myObjWithArrCreator = function () {
  let obj = {};
  obj.myArray = [];
  return obj;
};
//calling the function which returns an object
let objWithArr = myObjWithArrCreator();
//keying into the object to call push which adds food to its array
objWithArr.myArray.push("Queso", "Salsa", "Chicken");
console.log(objWithArr);

//Class that will create instances (objects that belong to the class) that have a property called myArray
//whose value is an array
class ClassWithArrayProperty {
  constructor() {
    this.myArray = [];
  }
}
//creating an instance of the class using the class constructor
let classInstanceWithArr = new ClassWithArrayProperty();
//keying into the instance to call push which adds food to its array
classInstanceWithArr.myArray.push("Queso", "Salsa", "Chicken");
console.log(classInstanceWithArr);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

// Function that creates an object and returns a function.
// Calling the returned function increments the `num` property of the object.
let myObjAdder = function () {
  let obj = { num: 0 };
  return () => {
    obj.num += 1;
    if (obj.num !== 3) {
      console.log(obj.num);
    }
    return obj;
  };
};
let closureFunc = myObjAdder();
closureFunc();
closureFunc();
console.log(closureFunc());

// Class that creates instances with a `num` property.
// Calling the `adder` method increments the `num` property of the instance.
class ClassThatAdds {
  constructor() {
    this.num = 0;
  }
  adder() {
    this.num += 1;
    if (this.num !== 3) {
      console.log(this.num);
    }
    return this;
  }
}
let someInstanceThatCanAdd = new ClassThatAdds();
someInstanceThatCanAdd.adder();
someInstanceThatCanAdd.adder();
console.log(someInstanceThatCanAdd.adder());


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

//Static vs Instance Methods
class StaticClassMaker {
  constructor() {
    this.instanceProperty = "I'm not static!";
  }

  static staticProperty = "I am static!";

  static staticMethod() {
    console.log("This is a static method from a class.");
    console.log(`Static Property Value: ${this.staticProperty}`);
  }

  instanceMethod() {
    console.log("This is an instance method.");
    console.log(`Instance Property Value: ${this.instanceProperty}`);
  }
}

let instance = new StaticClassMaker();
console.log(instance.instanceProperty); // Outputs: "I'm not static!"
instance.instanceMethod(); // Outputs: "This is an instance method." and "Instance Property Value: I'm not static!"

console.log(StaticClassMaker.staticProperty); // Outputs: "I am static!"
StaticClassMaker.staticMethod(); // Outputs: "This is a static method from a class." and "Static Property Value: I am static!"
