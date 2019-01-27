// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
	for (let i = 0; i < gifts.length; i++) {
		console.log(`Wrapped ${gifts[i]} and added a bow!`);
	}

	return gifts;
}

wrapGifts(gifts);

for (let age = 30; age < 40; age++) {
	console.log(`I'm ${age} years old. Happy birthday to me!`);
}

function printBadges(employees) {
	for (let i = 0; i < employees.length; i++) {
        console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);  
	}
	return employees;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function tailsNeverFails() {


    while (getRandomInt(2) !== 1) {
        console.log('Tails')
    }
    console.log('Heads')
}