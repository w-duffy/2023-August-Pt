// helper function

// function comparer (val1, val2, isSmaller=false) {
//   console.log(val1, val2, isSmaller)
//   if (val1 > val2 && isSmaller === false) {
//     return val1;
//   } else if (val1 < val2 && isSmaller === true) {
//     return val1;
//   }
//    else {
//     return val2;
//   }
// }



// function findBiggerNum(num1, num2) {
//   return Math.min(num1, num2)
//   // let bigNum;
//   //   if (num1 < num2) {
//   //     bigNum = num1;
//   //   } else {
//   //     bigNum = num2;
//   //   }
//   //   return bigNum;
//   }
  //   Using Ternary
function findBiggerNum(num1, num2) {

  let bigNum = num1 > num2 ? num1 : num2;

  return bigNum;
}


function multiplyBiggerNumByTwo(num1, num2) {

  let bigNum = findBiggerNum(num1, num2);
  return bigNum * 2;

}

function divideBiggerNumByThree(num1, num2) {

  let bigNum = findBiggerNum(num1, num2);
  return bigNum / 3;

}

function eatMostTacos(sum1, sum2) {

  let bigNum = findBiggerNum(sum1, sum2);
  return `I ate ${bigNum} tacos.`;

}

function adoptSmallerDog(weight1, weight2) {
    let smallDog;

    if (findBiggerNum(weight1, weight2) == weight1) {
      smallDog = weight2;
    } else {
      smallDog = weight1;
    }

    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }
//Using Ternary
function adoptSmallerDog(weight1, weight2) {

  let smallDog = findBiggerNum(weight1, weight2) == weight1 ? weight2 : weight1;
  return `I adopted a dog that weighs ${smallDog} pounds.`;

}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
