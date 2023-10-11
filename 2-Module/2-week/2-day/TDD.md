# Test Driven Development

Test Driven Development (TDD) is a convention that we use to write test specs and then write code to meet those test specs. This is used in big companies like Google to help ease collaboration and ensure that code passes some sort of functionality before being integrated.

There are many different types of ways to do Tests. You may see tests using `Mocha` and `Chai`, which are libraries. At App Academy you will also see `Cypress` for testing HTML/CSS, `Jest`, for testing React, and `PyTest` for testing Python. Today we will be learning to read and write `Unit Tests` using `Mocha` and `Chai`.

Mocha Documentation: https://mochajs.org/
Chai Documentation: https://www.chaijs.com/

To start writing unit tests, we first need to install and import these libraries.

In your terminal run:

```sh
npm install mocha chai
```

Create a "test" folder, where we will write our tests, and a "src" folder where we will write our code. "Src" is also seen as "problems" with a/A tests

In the "test" folder, create a file called `00-returnsString-spec.js`. This follows naming convention, and we can ensure it runs in a specific order by numbering them. You can name the file whatever works for you

In the file import the testing library `chai`, so we can use the `expect` function. Then set a variable called "expect" to `chai.expect` so we can use the expect function in a more readable way.

Your code should look like this:
```js
const chai = require('chai');
const expect = chai.expect;


```


Now we can write test specs. We start with a test block, using `describe`. We pass in a title and a call back function of tests

```js
const chai = require('chai');
const expect = chai.expect;

describe("Function returnsString: " ,()=> {

})

```

inside the call back, we pass in `it` blocks, which all have their own call backs.


```js
const chai = require('chai');
const expect = chai.expect;

describe("Function returnsString: " ,()=> {
    it("will return a string", ()=> {

    })
})
```

Utilizing chai, we can us the `expect` functionality to chain some readable code.
Let's create a test to make sure a function runs as expected:


```js
const chai = require('chai');
const expect = chai.expect;

    function myHelloWorld(){
        return "Hello World"
    }

describe("Function returnsString: " ,()=> {
    it("Should be a function", () => {
        expect(myHelloWorld).to.exist;
        expect(myHelloWorld).to.be.a("function");
    });
    it("will return a string", ()=> {
        expect(myHelloWorld()).to.be.a('string'); //tests that the return of myHelloWorld will be a string
        //There are many ways to do this same check, so check chai docs!
    });

    it("will return 'Hello World'", ()=> {
        expect(myHelloWorld()).to.eql('Hello World') //checks that return val will deeply equal 'Hello World';
    });
})
```
