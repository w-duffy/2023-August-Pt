

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
    // Find the recipe for the pieType specified
    const recipe = recipes[pieType];
    // Bake the number of pies specified by the pieQuantity
    for (let i = 0; i < pieQuantity; i++) {
      // Print the ingredients for each ingredient in the recipe
      let combiningMsg = `Combining ingredients for ${pieType}: `
      combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
      console.log(combiningMsg);

      // Print the nth pie that was baked
      console.log(`Baked pie ${i + 1}!`);
    }

    // Print the cost of each pie based on the cost of each ingredient
    const costOfPie = recipe.reduce((prev, current) => {
      return prev + current.cost;
    }, recipe[0].cost);
    console.log(`Cost per pie: ${costOfPie}`);

    // Calculate the total cost of all the pies
    const totalCost = costOfPie * pieQuantity;

    // Print the total revenue calculated using the given profitMargin
    const revenue = totalCost * (profitMargin || 1.2);
    console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
  }
