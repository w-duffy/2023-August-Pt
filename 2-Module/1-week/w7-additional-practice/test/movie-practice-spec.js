const { expect } = require("chai");

/* Start here:
In lines 6-8, We're importing all of the Classes so that we can use them in the below tests
A class is a blueprint that defines the variables (often called attributes or properties)
and the methods (functions) that are common to all objects of a certain kind.

Hint: Use the paths provided in the require() calls to determine your file names and structure
Hint: The way our classes are being imported is how they'll have to be exported.
*/

const Movie = require("../classes/movie.js");
const {Horror} = require("../classes/horror.js");
const Comedy = require("../classes/comedy.js");
const {Action} = require("../classes/action.js");
const Actor = require("../classes/actor.js");

// The "describe" blocks holds our tests for the Movie class
describe("Movie class", function() {

    // This "it" block checks if the Movie class sets its attributes correctly on creation
    it("should set title, duration, and rating on creation", function() {
        //here we're creating an instance of a movie so we can test if the class is set up correctly
        //Remember: an instance is just an object (i.e., let object = {key: "value"}) that belongs to a class
        let movieInstance = new Movie("The Matrix", 142, 9.3);

        //since an instance is just an object, we can key into its properties
        //keying into an object returns the value at the key (i.e., let value = object.key)
        expect(movieInstance.title).to.equal("The Matrix");
        expect(movieInstance.rating).to.equal(9.3);
        expect(movieInstance["duration"]).to.equal(142);
    });

    // Checks if the Movie class can correctly identify long movies
    it("should correctly determine if a movie is long (more than 150 minutes)", function() {
        //creating instances to test the isLong method
        let longMovie = new Movie("Titanic", 151, 7.8);
        let shortMovie = new Movie("The Lion King", 150, 8.1);

        //instance methods have to be called on an instance of the class where the method is defined
        expect(longMovie.isLong()).to.be.true;

        //When I call isLong on the shortMovie instance, it should return false because short movies are <= 150
        expect(shortMovie.isLong()).to.be.false;
    });

    // Checks if the Movie class has a function that can update the rating attribute
    it("should allow updating the rating", function() {
        let inception = new Movie("Inception", 148, 8.8);

        inception.updateRating(9.0);
        expect(inception["rating"]).to.equal(9.0);
    });
});


describe("Horror class", function() {
    it("inherits from the Movie class and includes a scareLevel attribute", function() {
        let insidious = new Horror("Insidious", 103, 6.8, 8);
        let regularMovie = new Movie("The Lion King", 117, 8.0);
        let bracketNotation = "scareLevel"

        expect(insidious.scareLevel).to.equal(8);
        expect(regularMovie[bracketNotation]).to.be.undefined;

        expect(insidious instanceof Horror).to.be.true;
        expect(insidious instanceof Movie).to.be.true;
    });
    it("has a method that increases the scare level", function() {
        let theGrudge = new Horror("The Grudge", 110, 7, 6);
        let cabinInTheWoods = new Horror("Cabin in The Woods", 100, 7, 0);

        //Here we're calling an instance method that should increase scareLevel
        theGrudge.addScare()
        theGrudge.addScare()
        expect(theGrudge.scareLevel).to.equal(8);


        let i = 10;
        while (i < 15){
            cabinInTheWoods.addScare()
            i++
        };

        expect(cabinInTheWoods.scareLevel).to.equal(5);
        expect(cabinInTheWoods.addScare()).to.be.undefined //When is a function's return value undefined?
        expect(cabinInTheWoods.scareLevel).to.equal(6);
    })
});

/* The rest of the tests don't have many hints.  See if you can try and understand what's going on.
We will do a deep dive into test specs starting Tuesday.  Please reach out if you have any questions! */

describe("Comedy class", function() {
    it("inherits from the Movie class and includes a laughsPerMinute attribute", function() {
        let zoolander = new Comedy("Zoolander", 107, 7.3, 4);
        let regularMovie = new Movie("Gladiator", 155, 8.5);

         expect(zoolander.title).to.be.equal("Zoolander");

        expect(zoolander.laughsPerMinute).to.equal(4);
        expect(regularMovie.laughsPerMinute).to.be.undefined;

        expect(zoolander instanceof Comedy).to.be.true;
        expect(zoolander instanceof Movie).to.be.true;
    });
});

describe("Action class", function() {
    it("inherits from the Movie class and includes an explosionCount attribute", function() {
        let dieHard = new Action("Die Hard", 132, 8.2, 15);
        let regularMovie = new Movie("The Notebook", 124, 7.8);
        let variable = dieHard.explosionCount

        expect(regularMovie.explosionCount).to.be.undefined;
        expect(variable).to.equal(15);

        expect(dieHard instanceof Action).to.be.true;
        expect(dieHard instanceof Movie).to.be.true;
    });
});


describe("Actor class", function() {
    it("should set the actor's name on creation", function() {
        //unconventional approaches intended to highlight older concepts
        let actorName = "Leonardo DiCaprio"
        let actor = new Actor(actorName);
        let apple = "name"
        let taco = actor

        expect(taco[apple]).to.equal(actorName);
    });
});


describe("Movie class", function() {
    it("should have a cast which can be populated with actor instances", function() {
        let movie = new Movie("Inception", 148, 8.8);
        let leo = new Actor("Leonardo DiCaprio");
        let ellen = new Actor("Ellen Page");

        //Hint: What data type do we call push on?
        //You may need to revisit your model and add a property.
        movie.cast.push(leo);
        movie.cast.push(ellen);

        expect(movie.cast).to.deep.include.members([leo, ellen]);
    });


    it("should correctly determine if an actor is in the movie", function() {
        let movie = new Movie("The Departed", 151, 8.5);
        let leo = new Actor("Leonardo DiCaprio");
        movie.cast.push(leo);

        //Hint: always check what the method is being called on to figure
        //out where and how it should be declared
        expect(Movie.actorInMovie(movie, "Leonardo DiCaprio")).to.be.true;

        //"to.be" and "to.equal" tell you what the method needs to evaluate to
        expect(Movie.actorInMovie(movie, "Tom Hanks")).to.be.false;
    });
});
