// export default function;

// Lesson: https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/coin-counter-sieve
// Part 1: Create a coin counter function that uses **recursion** to solve the problem
// Function takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies

export default function exactChangeNeeded(amountOfMoney) {
  // Optionally, check for correct data type and return gibberish/error if invalid data (e.g., a string) is passed in
  if (isNaN(amountOfMoney)) {
    return -1;
  }

  let pennies = 0;
  let nickels = 0;
  let dimes = 0;
  let quarters = 0;

  // For recursion, 1st we need a **base case** (aka escape hatch!) so it doesn't recurse (aka "loop") forever
  // BASE CASE (safety net!)
  if (amountOfMoney === 0) {
    // This is just saying, "stop adding coins once there's no money to count"
    // It's good to **always** write the base case / escape hatch first
    return amountOfMoney;
  }
  // RECURSIVE CASE (kinda like a WHILE-LOOP!)
  else if (amountOfMoney >= 0) {
    let counter = 0
    // We have quarters (25), dimes (10), nickles (5), & pennies (1)
    // We want to check the BIGGEST first to get the ideal # of coins -- e.g., 1 quarter vs. 25 pennies
    if (amountOfMoney >= 0.25) {
      // If 25+ pennies, we can change them into a quarter
      quarters = quarters + 1; // Add a quarter...
      amountOfMoney -= 0.25; // ...subtract 25 pennies to keep the right total

      // After DOING STUFF, function calls itself again
      return exactChangeNeeded(amountOfMoney);
      //  ^ this part is where the function calls **itself**
      //  Calling itself is "recursion"
      //  ...and it breaks shit/goes on forever, unless we
      //    have a base case / escape hatch to end it
    }

  }
}