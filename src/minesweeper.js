// Genereate Player Board with Nested Array
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rows = 0; rows < numberOfRows; rows++) {
    const row = [];
    for (let columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let rows = 0; rows < numberOfRows; rows++) {
    const row = [];
    for (let columns = 0; columns < numberOfColumns; columns++) {
      row.push(null);
    };
    board.push(row);
  };
  let numberOfBombsPlaced = 0;

  // The code in the while loop has the potential to place bombs on top of already existing bombs.
    // This will be fixed when you learn about control flow.
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor((Math.random() * numberOfRows));
    let randomColumnIndex = Math.floor((Math.random() * numberOfColumns));
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  };

  return board;
};

const printBoard = board => {
// Chain method to join rows with new lines, placing each rowon it's own line
  console.log(board.map(row => row.join(' | ')).join('\n'));
};


let playerBoard = generatePlayerBoard(3, 4);

let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard)
