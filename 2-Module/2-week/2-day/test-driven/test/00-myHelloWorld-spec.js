//library imports
const chai = require('chai');
const expect = chai.expect;

//file imports
const myHelloWorld = require('../src/myHelloWorld.js');


//Tests

describe("Function myHelloWorld", ()=> {
    //it blocks, each individual functionality we need to pass to complete the describe block
    it("Should be a function", () => {
        //test that myHelloWorld is a function
        expect(myHelloWorld).to.exist;
        expect(myHelloWorld).to.be.a('function')
    });

    it("Should return a string" , ()=> {
        //test that the return of myHelloWorld will be a string
        expect(myHelloWorld()).to.a('string');
    });

    it("Should return a string that says 'Hello World'", ()=> {
        expect(myHelloWorld()).to.eql("Hello World");
    })

})
