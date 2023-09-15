/*
Elden Ring Weapon Damage Boost

The Elden Ring developers decide that weapons that haven't seen extensive use
should be made more effective. The game developers have decided to grant a 20%
damage boost to weapons that have been used for less than 500 battles.

Write a function boostedWeapons(weaponsArray) that takes an array of objects containing
weapon names and their usage counts in battles. The function should return an array containing
the weapons that qualify for the damage boost, along with their new boosted damage.

Bonus: Try solving this without modifying the original array && its elements should not be modified.
*/


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

//   BONUS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     Original Array Not Modified
  //   console.log(weapons) // Prints:
//  [
//     { weapon: "Moonlight Greatsword", battles: 600, currDamage: 150 },
//     { weapon: "Lunar Scythe", battles: 480, currDamage: 130 },
//     { weapon: "Solar Spear", battles: 520, currDamage: 140 },
//     { weapon: "Starlight Bow", battles: 450, currDamage: 120 },
//     { weapon: "Galactic Dagger", battles: 510, currDamage: 100 },
//   ];
