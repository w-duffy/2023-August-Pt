
class Review {
    constructor(vehicle, tester, starRating, text) {
        this.vehicle = vehicle;
        this.tester = tester;
        this.starRating = starRating;
        this.text = text;
        console.log("HERHEHREHREH")
    }

    // advanced array methods, using rest parameters
    static filterByStars(stars, ...reviews) {
        return reviews.filter((review) => review.starRating === stars)
    }

    // context: use of this to invoke instance method and as argument
    // creating associations across classes
    addReview() {
        this.tester.reviews.push(this);
        this.vehicle.reviews.push(this);
    }
}

module.exports = Review;
