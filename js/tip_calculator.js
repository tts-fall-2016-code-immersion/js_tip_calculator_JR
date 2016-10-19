
// prints the question to a popup and also takes in the users input

var bill = prompt('What is your bill amount?');
var percentage = prompt('What percentage would you like to tip');

// need to divide by 100 in order to be able to enter the percentage and not the decimal point

var tip = Number(bill) * Number(percentage) / 100;
var total = Number(tip) + Number(bill);

// prints the tip and the total bill in the console and also in a popup

console.log('You need to tip ' + tip);
console.log('Your total bill is ' + total);

alert('You need to tip $' + tip + ' and your total bill is $' + total);

