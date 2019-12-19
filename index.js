
const cowsay = require('cowsay');

// Previously, you accessed a single item from process.argv by using an index.
// For this program, you will need to get multiple words. You can use the .slice() 
// method to skip the first two arguments.

// const words = process.argv.slice(2).join(' ');

// Create a variable for the result of calling cowsay()

// const theCowSaid = cowsay.say({
// 	text : words,
// 	e : "oO",
// 	T : "U "
// })

// console.log(theCowSaid);

// Bonus 1: Customizing the eyes and the tongue
// You passed an object to cowsay.say() that specifies not only the 
// text, but also how to draw the eyes (e) and the tongue (T).

// Change your code so that it captures the first two command line 
// arguments (after node index.js) and uses these as the values for 
// the e and T properties.



// const theCowSaid = cowsay.say({
// 	text : words,
//     e : process.argv[2],
//     T : process.argv[3]
// })

// console.log(theCowSaid);
// console.log(process.argv[2])

// alternate way
// const words = process.argv.slice(2).join(' ');
const words = process.argv[4]
const eyes = process.argv[2];
const tongue = process.argv[3];

const theCowSaid = cowsay.say({
	text : words,
    e : eyes,
    T : tongue
})
//console.log(theCowSaid);

// Bonus 2: Create a function that wraps cowsay.say()
// Write a function called moo() that accepts three arguments: text, eyes, and tongue.

// In the body of the function, call cowsay.say() using the text, eyes, and tongue 
// arguments to customize what they cow says.

// function moo(words, eyes, tongue) {
//    return cowsay.say({text: words, e: eyes, T: tongue});
// }

// console.log(moo(words, eyes, tongue));

const moo = require('./moo');
console.log(moo(words, eyes, tongue));