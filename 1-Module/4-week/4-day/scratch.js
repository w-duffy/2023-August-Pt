/*
Elden Ring Weapon Damage Boost

In Elden Ring, weapons that haven't seen extensive use are sharper and more effective.
The game developers have decided to grant a 20% damage boost to weapons that
have been used for less than 500 battles.

Write a function boostedWeapons(weaponsArray) that takes an array of objects containing
weapon names and their usage counts in battles. The function should return an array containing
the weapons that qualify for the damage boost, along with their new boosted damage.

Try solving this without modifying the original array && its elements should not be modified.
*/


//
let boostedWeapons = (weaponsArray) => {
    let answer = filterArr.map(el => {

        if(el.includes('weapon')){

          return el

        }

        if(el.includes('bonusDamage')){

          return el

        }

      })

}


weapons = [
    { weapon: "Moonlight Greatsword", battles: 600, currDamage: 150 },
    { weapon: "Lunar Scythe", battles: 480, currDamage: 130 },
    { weapon: "Solar Spear", battles: 520, currDamage: 140 },
    { weapon: "Starlight Bow", battles: 450, currDamage: 120 },
    { weapon: "Galactic Dagger", battles: 510, currDamage: 100 },
  ];

  console.log(boostedWeapons(weapons));

  //PRINTS:
  // [
  //   { weapon: 'Lunar Scythe', bonusDamage: 156 },
  //   { weapon: 'Starlight Bow', bonusDamage: 144 }
  // ]

  console.log(weapons);
  //PRINTS:
//   [
//     { weapon: "Moonlight Greatsword", battles: 600, currDamage: 150 },
//     { weapon: "Lunar Scythe", battles: 480, currDamage: 130 },
//     { weapon: "Solar Spear", battles: 520, currDamage: 140 },
//     { weapon: "Starlight Bow", battles: 450, currDamage: 120 },
//     { weapon: "Galactic Dagger", battles: 510, currDamage: 100 },
//   ];
