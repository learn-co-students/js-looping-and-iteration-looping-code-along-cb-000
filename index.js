// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees;
}

function tailsNeverFails() {
  let coinFlip = Math.round(Math.random());
  // Tails == 1 and Heads == 0
  let tailsCounter = 0;
  while (coinFlip != 0) {
    tailsCounter++;
    coinFlip = Math.round(Math.random());
  }
  return `You got ${tailsCounter} tails in a row!`;
}
