# Week 8 - Monday

## Content We Will Cover This Week

- Further Explore Context
- Bind
- Call/Apply
- Test Driven Development


## Content Today:

- Further Explore Context
- Bind
- Call/Apply

## Day Break-Down

- Learning Boost (5 min)
- Review HW (5 min)
- Bind/Call/Apply Lecture (30 min)
- Bind Quiz (10 min)
- Call Quiz (10 min)
- Arrow quiz (10 min)
- Context Project Phase 4 - 11 (Rest of Day)


### Bind

Bind is a built-in Javascript function that we can use to attach context.
We can use this when we are working in a setting where context may/may not be lost and we want to ensure that the correct context is always used.

Bind is used to keep the context of a function so we can continue to invoke that function with the same context already applied.

```js


class Government {
    constructor(name){
        this.name = name;
        this.taxRate = .07
        this.treasury = 0;
    }

    collectTax(grossIncome){
        let taxedAmount = grossIncome * this.taxRate;
        this.treasury += taxedAmount;
        let netIncome = grossIncome - taxedAmount;
        return netIncome;
    }

    changeLegalName(newName){
        this.name = newName
    }
};

class Person {
    constructor(name){
        this.name = name;
        this.bankSum = 0;
    }

    getPaid(grossIncome, collectTaxFunc){
        let netIncome = collectTaxFunc(grossIncome);

        this.bankSum += netIncome;
        console.log("You Got paid! Your new bank total is: ", this.bankSum );
    }

    printName = () => {
        console.log(this.name)
    }
}


let USA = new Government("US Government");
let Anthony = new Person("Anthony");


const sayName = Anthony.printName;

sayName()



Anthony.getPaid(100, USA.collectTax) //throws context error
let USATaxCollector = USA.collectTax.bind(USA)
Anthony.getPaid(100, USATaxCollector);// returns "You got paid: Bank total is: 93"


```


### Call

`Call` is a built-in Javascript function that we can use to attach `context`.
We can use this when we want to keep the context of a specific returned output from a function. We pass in the context to be used, as well as any number of variables. A great use case for this is when you need to access the variables of one class within a completely different class.


Example:

```js
class Government {
    constructor(name){
        this.name = name;
        this.taxRate = .07
        this.treasury = 0;
    }

    collectTax(grossIncome){
        let taxedAmount = grossIncome * this.taxRate;
        this.treasury += taxedAmount;
        let netIncome = grossIncome - taxedAmount;
        return netIncome;
    }

    changeLegalName(newName){
        this.name = newName
    }
};

class Person {
    constructor(name){
        this.name = name;
        this.bankSum = 0;
    }

    getPaid(grossIncome, collectTaxFunc){
        let netIncome = collectTaxFunc(grossIncome);

        this.bankSum += netIncome;
        console.log("You Got paid! Your new bank total is: ", this.bankSum );
    }

    printName = () => {
        console.log(this.name)
    }
}


let usa = new Government("US Government");
let anthony = new Person("Anthony");

anthony.getPaid(100, USA.collectTax) //throws context error
let usaTaxCollector = usa.collectTax.bind(usa) // binds
anthony.getPaid(100, usaTaxCollector);// returns "You got paid: Bank total is: 93"


```


### Apply

`Apply` is a built-in Javascript function that we can use to attach `context`.
It works the same as `Call`, except `Apply` takes in an array of arguments.

```js
class Government {
    constructor(name){
        this.name = name;
        this.taxRate = .07
        this.treasury = 0;
    }

    collectTax(grossIncome){
        let taxedAmount = grossIncome * this.taxRate;
        this.treasury += taxedAmount;
        let netIncome = grossIncome - taxedAmount;
        return netIncome;
    }

    changeLegalName(newName){
        this.name = newName
    }
};

class Person {
    constructor(name){
        this.name = name;
        this.bankSum = 0;
    }

    getPaid(grossIncome, collectTaxFunc){
        let netIncome = collectTaxFunc(grossIncome);

        this.bankSum += netIncome;
        console.log("You Got paid! Your new bank total is: ", this.bankSum );
    }

    printName = () => {
        console.log(this.name)
    }
}


let USA = new Government("US Government");
let Anthony = new Person("Anthony");


const sayName = Anthony.printName;

sayName()

console.log(Anthony.name) //"Anthony"
USA.changeLegalName.apply(Anthony, ["Will"]);
console.log(Anthony.name) //"Will"
```



### Arrow Functions

`Arrow Functions` were introduced in ES6. They allow us to have implicit returns, and make more concise function builds. Inside a class, they can be used to bind `context`. Keep in mind that this can take up more memory than needed, so use this sparingly, or just use `Bind`,`Call`, or `Apply` for memory sensitive apps.
