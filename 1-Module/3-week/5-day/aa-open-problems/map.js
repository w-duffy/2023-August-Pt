/*
map
Given the array friends below, use the Array.map() method to map the
current array to an array of booleans representing whether or not the friend
has been friends with the user for more than 5 years. Then print the newly
mapped array.
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

//Khaliph's version
// const goodFriendsOrNot = friends.map(({name, yearsOfFriendship}) => {
//     console.log(name, yearsOfFriendship)
//     if(yearsOfFriendship < 5) {
//      return false
//    } else {
//      return true
//    }

// });
// const goodFriendsOrNot = friends.map(friend => {
// //     // Write your solution here.
// //     // console.log(friend.yearsOfFriendship > 5)
// //     let {name, yearsOfFriendship} = friend
// //     return yearsOfFriendship > 5


// });

// const goodFriendsOrNot = friends.map(friend => {
//     // Write your solution here.
//     // console.log(friend.yearsOfFriendship > 5)

//     return friend.yearsOfFriendship > 5

// });
console.log(goodFriendsOrNot);          // [false, false, true, true];
