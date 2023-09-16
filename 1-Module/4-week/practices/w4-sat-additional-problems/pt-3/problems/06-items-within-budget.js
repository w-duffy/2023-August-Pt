/*
    Items Within Budget
    Write an arrow function itemsWithinBudget(budget, items) that accepts a budget number and an array of objects.
    The function should return an array of item names whose price is within budget.
    Look at examples below to see how item objects are structured.

    const items1 = [{name: 'iPhone', price: 700},
                      {name: 'laptop', price: 2000},
                      {name: 'guitar', price: 300},
                      {name: 'camera', price: 1200}
                    ]
    const items2 = [ {name: 'online classes', price: 1000},
                        {name: 'omakase bento box', price: 100},
                        {name: 'medicine', price: 50}
                    ]
    
    console.log(itemsWithinBudget(1000, items1)) // prints ['iPhone', 'guitar'] 
    console.log(itemsWithinBudget(200, items2)) // prints ['omakase bento box', 'medicine']
*/

const itemsWithinBudget = (budget, items) => {
    //!!START
    // basic forEach solution
    const withinBudget = [];

    items.forEach(obj => {
        if (obj.price <= budget) withinBudget.push(obj.name);
    });

    return withinBudget;

    // using filter and map
    return items.filter((item) => item.price <= budget).map((item) => item.name);

    // if you expand the prompt to lower the budget as you "buy" items
    const itemArr = [];

    // for (let i = 0; i < items.length; i++) {
    //     let itemObj = items[i];
    //     if (itemObj.price <= budget) {
    //         itemArr.push(itemObj.name);
    //         budget -= itemObj.price;
    //     }
    // }
    // return itemArr;
    //!!END
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = itemsWithinBudget;
} catch (e) {
    module.exports = null
}
