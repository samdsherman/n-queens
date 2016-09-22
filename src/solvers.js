/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = []; //fixme

  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      if (j === i) {
        // push a 1
        row.push(1);
      } else { 
        // push a 0
        row.push(0);
      }
    }
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1;
  for (var i = 1; i <= n; i++) {
    solutionCount = solutionCount * i;
  }

 

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({n: n});
  
  if (n === 0 || n === 2 || n === 3) {
    return board.rows();
  }

  var numQueens = 0;
  // for (initialization; condition; increment)

  var findSolutionStartingAt = function(rowIndex, colIndex) {
  //starting position [rowInx][colInx]
  //make a function containing code below, run again but on new starting position 
    for (; rowIndex < board.rows().length; ++rowIndex) {
      for (; colIndex < board.rows().length; ++colIndex) {
        board.togglePiece(rowIndex, colIndex);
        if (board.hasAnyQueenConflictsOn(rowIndex, colIndex)) {
          board.togglePiece(rowIndex, colIndex);
        } else {
          ++numQueens;
        }
      }
      colIndex = 0;
    }
  };

  for (var i = 0; i < board.rows().length; ++i) {
    findSolutionStartingAt(0, i);
    if (numQueens === n && !board.hasAnyQueensConflicts()) {
      solution = board.rows();
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
      return solution;
    } else {
      numQueens = 0;      
    }
  }

    /*
  new Board(
  [[1,0,0,0,0],
   [0,0,0,1,0],
   [0,1,0,0,0],
   [0,0,0,0,1],
   [0,0,1,0,0]]
   ).hasAnyQueensConflicts()
  */

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
