// invokes console.log() once for each element in the passed-in array
// prints out a welcome badge for each employee
// returns the passed-in array
function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

// invokes Math.random() to simulate coin flips
// returns the number of "Tails" flips in a row
// loops indefinitely until a flip results in "Heads"
function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }
  // console.log(`You got ${tails} tails in a row!`);
  return `You got ${tails} tails in a row!`;
}
