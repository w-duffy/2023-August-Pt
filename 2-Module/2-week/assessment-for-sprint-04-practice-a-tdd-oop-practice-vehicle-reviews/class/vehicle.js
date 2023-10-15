class Vehicle {
    constructor (modelName, year, price, reviews = []) {
        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = reviews;
    }

    // Validation: Get conditional logic from specs
    validate() {
        return (typeof this.modelName === "string")
            && this.year >= 1950
            && this.year <= 2100
            && this.price > 0;
    }

    // string interpolation using this to access attributes of instance
    getDetails() {
        return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
    }

    // error handling and conditional logic
    update(newName, newYear, newPrice) {
        if (newYear < 1950 || newYear > 2100) {
            throw new Error("Year must be between 1950 and 2100");
        };
        if (newPrice <= 0) {
            throw new Error("Price must be greater than 0");
        };

        this.modelName = newName;
        this.year = newYear;
        this.price = newPrice;
        return this;
    }

    // advanced array methods
    findReviewByTester(testerName) {
        return this.reviews.find((review) => review.tester.name === testerName);
    }

}

module.exports = Vehicle;
