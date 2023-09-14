function createPlayer(name) {
    let points = 0;
    let health = 100;

    return {
      earnPoints: function(amount) {
        points += amount;
        console.log(`${name} earned ${amount} points! Total: ${points} points.`);
      },
      spendPoints: function(amount) {
        if (points >= amount) {
          points -= amount;
          health += 20;  // Each potion bought restores 20 health.
          console.log(`${name} spent ${amount} points to buy a health potion. Health is now ${health}. Remaining points: ${points}`);
        } else {
          console.log(`${name} doesn't have enough points to buy a health potion. They need ${amount - points} more points.`);
        }
      },
      attack: function(dragon) {
        let damage = 25;  // Attacking does 25 dmg
        console.log(`${name} attacked The Elden Beast and dealt ${damage} damage!`);
        dragon.takeDamage(damage);
      },
      getPoints: function() {
        return points;
      },
      getHealth: function() {
        return health;
      }
    };
  }


  function createDragon(name) {
    let hp = 100;

    return {
      firstName: "Will",
      takeDamage: function(amount) {
        hp -= amount;
        if (hp <= 0) {
          console.log(`${name} has been defeated! You win!`);
        } else {
          console.log(`${name} now has ${hp} HP left.`);
        }
      },
      getHealth: function() {
        return hp;
      }
    };
  }







  const tarnished = createPlayer("Tarnished");
  const eldenBeast = createDragon("The Elden Beast");

  // console.log("---- The Battle Begins ----"); // The comments below are not the prints, instead they're descriptions
  tarnished.earnPoints(50);  // Tarnished earns 50 points.
  tarnished.spendPoints(30); // Tarnished spends 30 points to buy a health potion.
  tarnished.attack(eldenBeast);  // Tarnished attacks The Elden Beast.
  tarnished.attack(eldenBeast);  // Tarnished attacks The Elden Beast again.
  tarnished.attack(eldenBeast);  // Tarnished makes another attack.
  tarnished.attack(eldenBeast);  // eldenBeast is defeated on this attack.












//OPTIONAL INTERACTIVE CLOSURE DEMO ----------------------------------------------------------------------
/*
THE CODE BELOW IS A DEMO THAT'S USING READLINE FOR AN INTERACTIVE EXPERIENCE.
WE DO NOT NEED TO KNOW ABOUT READLINE AT THIS POINT.
THE MAIN FOCUS IN THE BELOW EXAMPLE IS TO SHOW CLOSURES
THROUGH AN INTERACTIVE DEMO.
*/

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function createPlayer(name) {
//   let points = 0;
//   let health = 100;

//   return {
//     earnPoints(amount) {
//       points += amount;
//       console.log(`${name} earned ${amount} points! Total: ${points} points.`);
//     },
//     spendPoints(amount) {
//       if (points >= amount) {
//         points -= amount;
//         health += 20;  // Each potion bought restores 20 health.
//         console.log(`${name} spent ${amount} points to buy a health potion. Health is now ${health}. Remaining points: ${points}`);
//       } else {
//         console.log(`${name} doesn't have enough points to buy a health potion. They need ${amount - points} more points.`);
//       }
//     },
//     attack(dragon) {
//       let damage = 25;
//       dragon.takeDamage(damage);
//       console.log(`${name} attacked The Elden Beast and dealt ${damage} damage!`);
//     },
//     getHealth() {
//       return health;
//     }
//   };
// }

// function createFinalBoss(name) {
//   let hp = 100;

//   return {
//     takeDamage(amount) {
//       hp -= amount;
//       if (hp <= 0) {
//         console.log(`The next attack will take down ${name}..`);
//         rl.close();
//       } else {
//         console.log(`${name} now has ${hp} HP left.`);
//       }
//     },
//     getHealth() {
//       return hp;
//     }
//   };
// }

// function battle() {
//   const tarnished = createPlayer("Tarnished");
//   const theEldenBeast = createFinalBoss("The Elden Beast");
//   tarnished.earnPoints(50);

//   function nextMove() {
//     rl.question('What would you like to do? (earn/spend/attack/exit): ', (answer) => {
//       switch (answer) {
//         case 'earn':
//           tarnished.earnPoints(10);
//           break;
//         case 'spend':
//           tarnished.spendPoints(30);
//           break;
//         case 'attack':
//           tarnished.attack(theEldenBeast);
//           if(theEldenBeast.getHealth() === 0){
//             console.log("The Elden Beast has been defeated! You win!")
//             rl.close();
//             return;
//         }
//           if (theEldenBeast.getHealth() > 0) {
//             console.log('The Elden Beast attacks back!');
//             // Assuming The Elden Beast does 20 damage each time
//             tarnished.takeDamage ? tarnished.takeDamage(20) : null;  // Protecting against undefined in this example.
//           }
//           break;
//         case 'exit':
//           console.log('Exiting the game...');
//           rl.close();
//           return;
//         default:
//           console.log('Invalid command.');
//       }


//       if (tarnished.getHealth && tarnished.getHealth() <= 0) {
//         console.log("Tarnished has been defeated! Game over.");
//         rl.close();
//         return;
//       }

//       nextMove();
//     });
//   }

//   nextMove();
// }

// battle();
