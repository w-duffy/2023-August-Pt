/*
find
In this exercise, you will learn to use the Array.find()
method which will be useful to know. The Array.find() method accepts a
callback function that specifies the "find" condition(s) and returns the
first element that satisfies the condition(s). Check out the documentation here.

Given the friends array below, use the Array.find()
method to get the first friend whose name contains 3 or more vowels and print their name.
*/
const friends = [
    {
        name: "Albert",
        yearsOfFriendship: 3
    },
    {
        name: "Angela",
        yearsOfFriendship: 2
    },
    {
        name: "Freddy",
        yearsOfFriendship: 8
    },
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];

// Hint: create an array of vowels to use in your solution.

const threeVowelFriend = friends.find(friend => {
    const vowels = "aeiouAEIOU";


    const vowelCount = friend.name.split('').filter(char => vowels.includes(char)).length;

  return vowelCount >= 3;

});
// const threeVowelFriend = friends.find(friend => {
//         // Write your solution here.

//     //Jacob's solution:


//     // const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

//     // const threeVowelFriend = friends.find(friend => friend.name.split("").filter(element => vowels.includes(element)).length >= 3);
//     //     let vowels ="aeiou"
//     //     const vowelCount = friend.name.split('').filter(char => vowels.includes(char)).length;

//     //   return vowelCount >= 3;
//     let vowels = ["a", "e", "i", "o", "u"]

//     let count = 0;
//     let letterArr = friend.name.split("")
//     console.log(letterArr)
//     for(let i = 0; i < letterArr.length; i++){
//         let letter = letterArr[i]

//         if(vowels.includes(letterArr[i].toLowerCase())){
//             count++
//         }
//     }

//     if( count >= 3){
//         // console.log(friend.name)
//         return friend
//     }
// });
console.log(threeVowelFriend);             // Angela
