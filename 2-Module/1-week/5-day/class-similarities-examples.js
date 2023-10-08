//Function that creates an object with name and randomFood properties
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

//creating an instance of an array and using the push method to add food strings
let globalArr = []
globalArr.push("Queso", "Salsa", "Chicken")
console.log(globalArr)

//creating an instance of an object and keying into it's myArray property which returns an array.
//I can then to call push which will add food strings
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
//calling the class constructor which returns an object that is an instance of the class
let classInstanceWithArr = new ClassWithArrayProperty();
//keying into the instance to call push which adds food to its array
classInstanceWithArr.myArray.push("Queso", "Salsa", "Chicken");
console.log(classInstanceWithArr);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//Function that creates an instance of an object and returns a function
//calling the returned function increases the value of the outer object's instance (obj.num++)
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

//Class that creates an instance of an object
//calling the adder method increases the value of the instance's num property
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
