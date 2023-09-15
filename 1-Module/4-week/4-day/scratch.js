/*
Elden Ring Weapon Damage Boost

In Elden Ring, weapons that haven't seen extensive use are sharper and more effective.
The game developers have decided to grant a 20% damage boost to weapons that
have been used for less than 500 battles.

Write a function boostedWeapons(weaponsArray) that takes an array of objects containing
weapon names and their usage counts in battles. The function should return an array containing
the weapons that qualify for the damage boost, along with their new boosted damage.
*/


//
let boostedWeapons = (weaponsArray) =>{
   //return new arr

    //use filter to iterate through weaponsArray
    // let filterArr = weaponsArray.filter(el =>{
    //     // console.log(el)
    //     if(el.battles < 500){
    //         // el.damage = 1.2 * (el.damage);
    //         // el.boostedDamage = el.damage
    //         return true
    //     } else{
    //         return false
    //     }
    // })

    let answer = weaponsArray.map(el =>{
        // console.log(el)
        // console.log(el)
        let newObj = {}

        if(el.battles < 500){
        newObj.weapon = el["weapon"]
        newObj.boostedDamage = el["damage"] * 1.2
        return newObj
        }
    })
// console.log(answer)
return answer

}

  // [
  //   { weapon: 'Lunar Scythe', bonusDamage: 156 },
  //   { weapon: 'Starlight Bow', bonusDamage: 144 }
  // ]
weapons = [
    { weapon: "Moonlight Greatsword", battles: 600, damage: 150 },
    { weapon: "Lunar Scythe", battles: 480, damage: 130 },
    { weapon: "Solar Spear", battles: 520, damage: 140 },
    { weapon: "Starlight Bow", battles: 450, damage: 120 },
    { weapon: "Galactic Dagger", battles: 510, damage: 100 },
  ];

  console.log(boostedWeapons(weapons));
