function writeCards(names, event) {
  const collectedMessages = [];
  for (let i = 0; i < names.length; i++) {
    collectedMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return collectedMessages;
}

/* function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
} */

// let's remove the redundant use of "i":

function countDown(num) {
  while (num >=0) {
    console.log(num);
    num--;
  }
}