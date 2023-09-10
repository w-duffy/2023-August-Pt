/*
forEach
Given the array friends below, use the Array.forEach() method to iterate through each element and print the name and yearsOfFriendship properties stylized as "name: yearsOfFriendship years".



For example: "Albert: 3 years"
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

for (let i = 0; i < friends.length; i++){
    let objEl = friends[i]
    if(objEl.name === "Freddy"){
        return objEl.name

    }
}

friends.forEach(friend =>{
    console.log(friend.name)
})

/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/
