// import exactChangeNeeded from './coin-counter.js';

const arrayOfChange = [
  { name: 'quarter', value: 25 },
  { name: 'dime', value: 10 },
  { name: 'nickel', value: 5 },
  { name: 'penny', value: 1 },
];

const processCoinStacks = amountOfCents => {
  const coinStacks = {};

  arrayOfChange.forEach(e => {
    const getStackOfCertainCoin = exactChangeNeeded(e.value);
    const coinAmount = getStackOfCertainCoin(amountOfCents);
    coinStacks[e.name] = coinAmount;
    amountOfCents = amountOfCents % e.value
  });
  return coinStacks;
}

const exactChangeNeeded = (coinValue, totalCoins = 0) =>
  centsRemaining => {
    if (centsRemaining < coinValue) {
      return totalCoins;
    } else {
      totalCoins++
      return exactChangeNeeded(coinValue, totalCoins)(centsRemaining - coinValue);
    }
  }