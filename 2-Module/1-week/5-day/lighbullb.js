let maker = function (name, randomFood) {
  let obj = {};
  obj.name = name;
  obj.randomFood = randomFood;
  return obj;
};
console.log(maker("Will", "taco"));

class ClassMaker {
  constructor(name, randomFood) {
    this.name = name;
    this.randomFood = randomFood;
  }
}
console.log(new ClassMaker("Will", "taco"));

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


let myObjWithMethodCreator = function () {
  let obj = {};
  obj.sayHello = function () {
    console.log("hello world!");
  };
  return obj;
};
let objWithMethod = myObjWithMethodCreator();
objWithMethod.sayHello();

class InstanceWithMethodCreator {
  //Look I don't even need a constructor!
  sayHello() {
    console.log("hello world!");
  }
}
let classInstanceWithMethod = new InstanceWithMethodCreator();
classInstanceWithMethod.sayHello();


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

let globalArr = []
globalArr.push("Queso", "Salsa", "Chicken")
console.log(globalArr)

let globalObj = {myArray: []}
globalObj.myArray.push("Queso", "Salsa", "Chicken")
console.log(globalObj)

let myObjWithArrCreator = function () {
  let obj = {};
  obj.myArray = [];
  return obj;
};
let objWithArr = myObjWithArrCreator();
objWithArr.myArray.push("Queso", "Salsa", "Chicken");
console.log(objWithArr);

class ClassWithArrayProperty {
  constructor() {
    this.myArray = [];
  }
}
let classInstanceWithArr = new ClassWithArrayProperty();
classInstanceWithArr.myArray.push("Queso", "Salsa", "Chicken");
console.log(classInstanceWithArr);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

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
