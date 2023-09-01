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
 sub-array with the highest cost.
*/

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

// COMMENT TEST SPECS BACK IN
function costOfGroceries(groceries) {
    // Your code here
    // console.log("arr of items", groceries)
    //decalre total cost
    let totalCost = 0;

    //iterate through the arr
    for (let i = 0; i < groceries.length; i++){
        //el will be a string
        let el = groceries[i]
        // console.log("EL", el)
// butter: $1
        if (el === "butter"){
            totalCost += 1
        }
        // eggs: $2
        if (el === "eggs"){
            totalCost += 2
        }
        // milk: $3
        if (el === "milk"){
            totalCost += 3
        }
        if (el === "bread"){
            totalCost += 4
        }
        // bread: $4
        if (el === "cheese"){
            totalCost += 5
        }
         //if my el is a certain item add by that amount like we did in stringChanger
    }
    //return total cost
    return totalCost

}

// COMMENT TEST SPECS BACK IN
function mostExpensiveGroceries(groceriesList) {
    // Your code here


let highestCost = 0;
let index = 0;
    //el of outer arr are the grocery arrays
    //higghest use the helper func

    for (let i = 0; i < groceriesList.length; i++){

        let groceries = groceriesList[i]
        let currCost = costOfGroceries(groceries)
        // console.log("GROCERY LSIT", currCost)
        // if(currCost > highestCost){
            // console.log(i)
        if(currCost > costOfGroceries(groceriesList[index])){
            highestCost = currCost
            index = i
        }
    }
// return highestCost
    //return index
    return index

}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([['cheese', 'butter', 'eggs'], groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
