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

// Generate Random Bomb Board with Nested Array
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
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    };
  };

  return board;
};

const getNumberOfNeightborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1] ;

    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      };
    };
  });

  return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeightborBombs(bombBoard, rowIndex, columnIndex);
  };
};

const printBoard = board => {
// Chain method to join rows with new lines, placing each rowon it's own line
  console.log(board.map(row => row.join(' | ')).join('\n'));
};


let playerBoard = generatePlayerBoard(3, 3);

let bombBoard = generateBombBoard(3, 3, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 1, 1);
console.log('Updated Player Board: ');
printBoard(playerBoard);
