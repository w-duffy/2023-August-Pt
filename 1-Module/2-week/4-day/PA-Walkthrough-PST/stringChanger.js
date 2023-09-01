/*
String Changer
This problem is worth 5 points.
You may receive partial credit.

Build a function called stringChanger() that takes in two arguments:
a word and an operation.

Based on the operation, your function will
return the word modified in some way. The operations are:

"capitalize": Capitalize the first letter in the word.
"uppercase": Capitalize every letter in the word.
"double": Return the word twice in a row.
"reverse": Return the string with the letters in reverse order.
If the operation is invalid, return the word, unchanged.
*/
function stringChanger(word, operation) {
    // Your code here
    // console.log("WORD", word)
    // console.log("opertaion", operation)

    if (operation === "capitalize") {
        return word.charAt(0).toUpperCase() + word.slice(1, word.length);
       }



    // if (operation === "capitalize") {
    //     let firstChar = word.charAt(0).toUpperCase();
    //     let restOfWord = word.slice (1);
    //     return firstChar + restOfWord;
    //    }

    // if(operation === "capitalize"){
    //     //return word modified in some way
    // let firstLetter = word[0].toUpperCase();
    // let restOfWord = word.slice(1);
    // return firstLetter.concat(restOfWord);

    // }
    if(operation === "uppercase"){
        //return word modified in some way
        // console.log("UPPER", word.toUpperCase)
        return word.toUpperCase()
        // return word.toUpperCase()
    }
    if(operation === "double"){
        //return word modified in some way
        // return word + word
        return word.concat(word)

    }
    if(operation === "reverse"){
        //return word modified in some way
        // let splitArr = word.split("")
        // // console.log(splitArr)
        // let reversed = splitArr.reverse();
        // console.log(reversed)
        return word.split("").reverse().join("")

    }    //return word modified in some way
    return word
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");
