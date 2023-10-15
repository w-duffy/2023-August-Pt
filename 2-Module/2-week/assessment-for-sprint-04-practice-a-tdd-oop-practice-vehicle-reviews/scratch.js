// Class: Recipe for Spaghetti
class SpaghettiRecipe {
    constructor(pastaType, sauceType, addOns, cookingTimePasta, cookingTimeSauce) {
        // Properties (Ingredients)
        this.pastaType = pastaType;
        this.sauceType = sauceType;
        this.addOns = addOns; // This can be an array to represent multiple add-ons
        this.cookingTimePasta = cookingTimePasta;
        this.cookingTimeSauce = cookingTimeSauce;
    }

    // Methods (Cooking Instructions)
    cookPasta() {
        return `Boiling water and cooking ${this.pastaType} for ${this.cookingTimePasta} minutes.`;
    }

    cookSauceAndMeatballs() {
        return `Cooking meatballs until browned. Adding ${this.sauceType} and simmering for ${this.cookingTimeSauce} minutes.`;
    }

    serve() {
        return `Serving ${this.pastaType} on a plate, topped with ${this.sauceType}, ${this.addOns.join(', ')}. Delicious!`;
    }
}

// Instance: a Prepared Spaghetti Entree
const mySpaghetti = new SpaghettiRecipe('Spaghetti noodles', 'Tomato sauce', ['Meatballs', 'Grated Parmesan cheese', 'Basil leaves'], 10, 20);

console.log(mySpaghetti.cookPasta());
console.log(mySpaghetti.cookSauceAndMeatballs());
console.log(mySpaghetti.serve());

// Output:
// Boiling water and cooking Spaghetti noodles for 10 minutes.
// Cooking meatballs until browned. Adding Tomato sauce and simmering for 20 minutes.
// Serving Spaghetti noodles on a plate, topped with Tomato sauce, Meatballs, Grated Parmesan cheese, Basil leaves. Delicious!
