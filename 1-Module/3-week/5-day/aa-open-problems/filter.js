/*
filter
Given the array friends below, use the Array.filter()
method to filter the array to only contain friends whose name starts
with an "A" and who has been friends for over 5 years.
Then print the filtered array.

*/let arr = [{a: "yes"},2,3, [{a: "nest"}]]


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

let filteredResult = [];

for (let i = 0; i < friends.length; i++){
    let friendObj = friends[i];
    if(friendObj.name[0] === "A"  && friendObj.yearsOfFriendship >5){
        filteredResult.push(friendObj)
    }

}

// const filteredResult = friends.filter(friendObj => {
//     // Write your solution here.
//     console.log(friendObj.name)
//     return (friendObj.name[0] === "A"  && friendObj.yearsOfFriendship >5)
// })

console.log(filteredResult);
