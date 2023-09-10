/*
reduce
Given the friends array, use the Array.reduce() method
to get and print the sum of all the years of friendship with all the friends in the array.
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


// let someFunc = function(param1, param2){

// }


const totalYears = friends.reduce((acc, friend) =>{
    console.log("acc", acc)
    // console.log("acc property", acc.yearsOfFriendship)
    return acc + friend.yearsOfFriendship
}, 0 )

//Michael's Version:
// const totalYears = friends.reduce((acc, friend) => acc + friend.yearsOfFriendship, 0 )
console.log(totalYears);                        // 19
