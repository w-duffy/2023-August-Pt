/*
This Practice is completely optional. We're not expected to be able to code off of test specs until later next week.
Therefore, this practice is completely optional and solely intended to provide
extra content for student's looking for more practice.

Furthermore, I recommend completing the Dragons project, Context problems 1-3,
and the Employee project phases 1-3 before working on the below.
If you can get through those practices already then you're in great shape!

Class syntax is new so don't shy away from using this week's projects as
a resource to help you work through this practice should you decide to attempt it.

Throughout this practice you'll see comments that are intended to help clarify what's happening,
and point out material and concepts we've seen this week.

With all of that being said, don't forget to have fun!
*/

const { expect } = require("chai");


/* Start here:
In lines 30-34, We're importing all of the Classes so that we can use them in the below tests

Hint 1: Use the paths provided in the require() calls to determine your file names and structure
Hint 2: The way our classes are being imported is how they'll have to be exported.

*/

const Movie = require("../classes/movie.js");
const {Horror} = require("../classes/horror.js");
const Comedy = require("../classes/comedy.js");
const {Action} = require("../classes/action.js");
const Actor = require("../classes/actor.js");


//Don't let test-spec syntax throw you off.
//The tests are meant to function just like they sound when spoken out loud
describe("What's happening here", function() {
    it("is similar to how we've tested our files locally with node", function() {

    expect(1+1).to.equal(2) //if I console.log(1+1) I'd expect to see 2

    let name = "Will"
    expect(name).to.equal("Will") //if I console.log(name) I'd expect to see "Will"

    let addOne = (num) => num + 1;
    expect(addOne(1)).to.equal(2); //if I console.log(addOne(1)) I'd expect to see 2

    });
});


// this "describe" blocks holds our tests for the Movie class
describe("Movie class", function() {

    // This "it" block runs tests to see if your Movie class
    // sets its attributes correctly when we create a new instance of a Movie
    it("should set title, duration, and rating on creation", function() {

        //here we're creating an instance of a movie so we can test if the class is set up correctly
        let movieInstance = new Movie("The Matrix", 142, 9.3);

        //Remember: an instance is just an object (i.e., let object = {key: "value"}) that belongs to a class
        //since an instance is just an object, we can key into its properties
        //keying into an object returns the value at the key (i.e., let value = object.key)
        expect(movieInstance.title).to.equal("The Matrix");
        expect(movieInstance.rating).to.equal(9.3);
        //if you were to copy line 62 and 70 into your movie.js file, console.logging instance.duration would give you 142.
        expect(movieInstance["duration"]).to.equal(142);
    });

    // This checks if the Movie class can correctly identify long movies
    // by using a method you'll have to define
    // you can identify the method name by looking at what's being called on an instance
    it("should correctly determine if a movie is long (more than 150 minutes)", function() {
        //We have to first create instances of Movies so that we can test the method
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
        expect(inception.rating).to.equal(9.0);
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
    });
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
        let movie = new Movie("There Will Be Blood", 158, 8.2);
        let daniel = new Actor("Daniel Day-Lewis");
        let paul = new Actor("Paul Dano");

        //Hint: What data type do we call push on?
        //You may need to revisit your model and add a property.
        movie.cast.push(daniel);
        movie.cast.push(paul);

        expect(movie.cast).to.deep.include.members([daniel, paul]);
    });


    it("should correctly determine if an actor is in the movie", function() {
        let movie = new Movie("The Godfather", 175, 9.2);
        let al = new Actor("Al Pacino");
        movie.cast.push(al);

        //Hint: always check what the method is being called on to figure
        //out where and how it should be declared
        expect(Movie.actorInMovie(movie, "Al Pacino")).to.be.true;

        //"to.be" and "to.equal" tell you what the method needs to evaluate to
        expect(Movie.actorInMovie(movie, "Tom Hanks")).to.be.false;
    });
});
