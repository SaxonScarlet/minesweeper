'use strict';

// Genereate Player Board with Nested Array
var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    var row = [];
    for (var columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    var row = [];
    for (var columns = 0; columns < numberOfColumns; columns++) {
      row.push(null);
    };
    board.push(row);
  };
  var numberOfBombsPlaced = 0;

  // The code in the while loop has the potential to place bombs on top of already existing bombs.
  // This will be fixed when you learn about control flow.
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  };

  return board;
};

var printBoard = function printBoard(board) {
  // Chain method to join rows with new lines, placing each rowon it's own line
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);

var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);