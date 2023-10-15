console.log("I'm in tester")

const ElectricBicycle = require("./electric-bicycle");
const Bicycle = require("./bicycle");
const Review = require("./review");

class Tester {
    constructor (name, reviews = []) {
        this.name = name;
        this.reviews = reviews;
    }

    // invoking constructor and instance methods within and across classes
    submitReview(vehicle, starRating, text) {
        console.log("still in tester")
        if (vehicle.validate() === true) {
            // console.log("THIS LOOK", Review)
            let review = new Review(vehicle, this, starRating, text);
            review.addReview();
            this.setTesterAttribute(vehicle);
            return review;
        } else {
            throw new Error("Cannot submit review for invalid vehicle.");
        }
    }

    // checking the class of each instance
    setTesterAttribute(vehicle) {
        if (vehicle instanceof Bicycle) {
            this.bikeTester = true;
        }
        if (vehicle instanceof ElectricBicycle) {
            this.eBikeTester = true;
        }
    }
}
// console.log("still in tester")

console.log("REVIEW", Review)
module.exports = Tester;
