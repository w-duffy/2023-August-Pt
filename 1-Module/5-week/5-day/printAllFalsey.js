/***********************************************************************
You are given a recursive function, `printAllFalsy()`, that iterates t
through the TRUTHY_FALSEY array.

The function should prints all the falsy values it encounters.

The argument for the function will be the index to begin looking.
You only need to check indicies that're greater than or equal to the argument.

Examples:

const TRUTHY_FALSEY = [true, false, 1, 0, "hello", "", "world", null, undefined, NaN];

printAllFalsy(0);
// false
// 0
// "" //(looks blank on vscode)
// null
// undefined
// NaN

printAllFalsy(2);
// 0
// "" //(looks blank on vscode)
// null
// undefined
// NaN

***********************************************************************/

const TRUTHY_FALSEY = [true, [], false, 1, 0, "hello", "",
"world", null, undefined, NaN];

let arr = []
function printAllFalsy(index) {

    for (let i = 0; i < TRUTHY_FALSEY.length; i++){
        let el = TRUTHY_FALSEY[i]
        // if(!arr.length){
        if(!el){
        // if(!arr){
            console.log(el)
        }
    }

}


printAllFalsy(0);





// false
// 0
// "" //(looks blank on vscode)
// null
// undefined
// NaN

// printAllFalsy(2);
// 0
// "" //(looks blank on vscode)
// null
// undefined
// NaN
