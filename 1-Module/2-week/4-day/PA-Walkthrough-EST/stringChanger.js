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
    // console.log("WORD: ", word, "OPERATION: ", operation)
    //declare mod word variable

    //when operation is capitalize cap first letter

    if (operation === "uppercase"){
        let mod = word.toUpperCase()
        return mod
    }

    if (operation === "double"){
        return word + word
    }
    if (operation === "reverse"){
        return word[2] + word[1] + word[0]
    }
    if (operation === "capitalize"){
        console.log(word[0].toUpperCase)
        let answer = word[0].toUpperCase()
        console.log("An", answer)
        for (let i= 1; i < word.length; i ++){
            answer += word[i]
        }
        console.log(answer)
        return answer
        // return word[0].toUpperCase() + word[1] + word[2]
    }
    return word


    //



    //when operation is uppercase cap all letters -- foo.isUpperCase() === FOO
    //when operation is double double the word



    // return modified word


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
