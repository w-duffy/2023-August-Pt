/*
Most Expensive Groceries
This problem is worth 7 points.
You may receive partial credit.


You are compiling a price checker for a grocery store. The grocery prices are as follows:
butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5


First, create a function called costOfGroceries(groceries) which takes
a single array of grocery items and returns the total cost.


Then, write a function mostExpensiveGroceries(groceriesList) that takes
in a 2-dimensional array of grocery items and returns the index of the
sub-Array with the highest cost.
*/

// let prices = {
//     'butter': 1,
//     'eggs': 2,
//     'milk': 3,
//     'bread': 4,
//     'cheese': 5
// };

// function costOfGroceries(groceries) {
//     let total = 0;
//        for(let item of groceries) {
//         // console.log("KEY", item)
//         // console.log("VALUE", prices[item])
//         total += prices[item];
//        }
//        return total;
// }

const butter = 1
const eggs = 2
const milk = 3
const bread = 4
const cheese = 5


// function costOfGroceries(groceries) {
//     // Takes a single array of grocery items and returns the total cost
//   let total = 0;
//   let groceryCost = ["butter", "eggs", "milk", "bread", "cheese"];
//   for (let i = 0; i < groceries.length; i++){
//    total += (groceryCost.indexOf(groceries[i]) +1);
//   }
//   return total;
// }

// COMMENT TEST SPECS BACK IN
function costOfGroceries(groceries) {
    // Your code here
    //groceries of an array of items
    // console.log("groceries", groceries)
    //create a total cost
    let totalCost = 0;
    //look for similar problems
    //iterate through an array and at each index is the item
    for (let i = 0; i < groceries.length; i++){
        let el = groceries[i];
        // console.log("el", el)
        if(el === "butter"){
            totalCost += butter;
            // totalCost += 1;
        }
        if(el === "eggs"){
            totalCost += eggs;
        }
        if(el === "milk"){
            totalCost += milk;
        }
        if(el === "bread"){
            totalCost += bread;
        }
        if(el === "cheese"){
            totalCost += cheese;
        }
    }
    //return total cost
    return totalCost
}

// COMMENT TEST SPECS BACK IN
function mostExpensiveGroceries(groceriesList) {
    // Your code here
//will need cost -- highest cost
// let highestCost = 0;
let index = 0;
// console.log("checking", groceriesList)

//2 d array.  maybe need nested for loop
//find the highest total cost of all the grocerylists in my list
for (let i = 0; i < groceriesList.length; i++){
    //access el in outer array
    let el = groceriesList[i]
    // let currCost = costOfGroceries(el)
    // console.log("el", costOfGroceries(el))
    //maybe i need an if for checking which is bigger
    if(currCost > costOfGroceries(groceriesList[index])){
        // highestCost = currCost;
        index = i;
    }
}
//returns index
return index
}
// costOfGroceries(groceriesB);  // 13
// costOfGroceries(groceriesC);  // 9
// costOfGroceries(groceriesD);  // 3


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

console.log(costOfGroceries(groceriesA));  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

console.log(mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]));

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([['cheese', 'butter', 'eggs'], groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
