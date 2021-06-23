// const exactChangeNeeded = (coinValue, totalCoins = 0) => {
//   // if (isNaN(amountOfMoney) || amountOfMoney === 0) {
//   //   return;
//   // }
//   amountRemaining => {
//     if (coinValue < amountRemaining) {
//       return exactChangeNeeded(coinValue, totalCoins++)(amountRemaining - coinValue)
//     } else {
//       return totalCoins
//     }
//   }
// }
// export default exactChangeNeeded;

//   const n = denomination;

//   const newArray = [25, 10, 5, 1];
//   if (amountOfMoney === 0) {
//     return newArray;
//   }
//   if (amountOfMoney < n) {
//     return exactChangeNeeded(amountOfMoney, newArray[i] + 1
//     quarters = quarters + 1;
//     amountOfMoney -= 0.25;
//     return exactChangeNeeded(amountOfMoney);
//   }
// }


// } else if (amountOfMoney < 0.25 && amountOfMoney >= 0.10) {
//   dimes = dimes + 1;
//   amountOfMoney -= 0.10;
//   return exactChangeNeeded(amountOfMoney);
// } else if (amountOfMoney < 0.10 && amountOfMoney >= 0.01) {
//   nickels = nickels + 1;
//   amountOfMoney -= 0.05;
//   return exactChangeNeeded(amountOfMoney);
// } else {
//   pennies = pennies + 1;
//   amountOfMoney -= 0.01;
//   return exactChangeNeeded(amountOfMoney);
// }


//take in two values for amountOfCoins and denomination
//compare how many times the denom can fit in the amountToCompare
//recursivevly pass the ramaining value to the function again with the new denom
//add to an array or some type of out put that notes how many q, d, n, p?

//store denom in array [25, 10, 5, 1] - forEach array index and compare against amountToCompare
//take the initial amountOfMoney and multiply it by 100 to get all pennies right away
//the easiest first denom to check for is going to be the quarters
//

//amountToCompare > n {
//amountToCompare - n
//numberOfDenom ++
// } 

// arrayOfChange[0 - 3].value
// arrayOfChange[0 - 3].name

const exactChangeNeeded = (coinValue, totalCoins = 0) => //variable that stores a function passing in coinValues and totalCoins
  centsRemaining => //declare cents remaining
    centsRemaining < coinValue
      ? totalCoins
      : exactChangeNeeded(coinValue, totalCoins++)(centsRemaining - coinValue);


export default exactChangeNeeded;