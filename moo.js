// Bonus 3: Create a module for moo()
// Move your moo() function to a moo.js file.

// Make sure to module.exports = your moo() function 
// and require() it into your index.js.

function moo(words, eyes, tongue) {
    return cowsay.say({text: words, e: eyes, T: tongue});
 }
 
 // console.log(moo(words, eyes, tongue));

 module.exports = moo; 