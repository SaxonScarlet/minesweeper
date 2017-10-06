'use strict';

// Variables
// Represents empty row with three columns
var blankLine = '   |   |   ';
// Guess row - represents row when a player guesses (Hardcoded)
var guessLine = ' 1 |   |   ';
// Bomb row - represents row when a player reveals a bomb (Hardcoded)
var bombLine = '   | B |   ';

// Empty board section
console.log('This is what an empty board will look like:');

console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

// Guess and Bomb section
console.log('This is what a board with a guess and a bomb on it would look like:');

console.log(guessLine);
console.log(bombLine);
console.log(blankLine);