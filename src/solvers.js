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





window.findNRooksSolution = function(n, solutions) {
  var solve = function(row, currentBoard) {
    if (row === n) {
      console.log('Single solution for ' + n + ' rooks:', JSON.stringify(currentBoard.rows()));
      return currentBoard.rows();
    } else {
      for (var i = 0; i < n; i++) {
        currentBoard.togglePiece(row, i);
        if (!currentBoard.hasAnyRooksConflicts()) {
          return solve(row + 1, currentBoard);
          currentBoard.togglePiece(row, i);
        } else {
          currentBoard.togglePiece(row, i);       
        }
      }
    }
  };
  
  return solve(0, new Board({ 'n': n }));
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  solutions = 1;

  while (n >= 1) {
    solutions *= n;
    n--;
  }

  return solutions;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n, solutions) {
  var solve = function(row, currentBoard) {
    if (row === n) {
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(currentBoard.rows()));
      return currentBoard.rows();
    } else {
      for (var i = 0; i < n; i++) {
        currentBoard.togglePiece(row, i);
        if (!currentBoard.hasAnyQueensConflicts()) {
          var solution = solve(row + 1, currentBoard);
          if (solution) { 
            return solution; 
          } 
        }
        currentBoard.togglePiece(row, i);       
      }
    }
  };

  return solve(0, new Board({ 'n': n })) || new Board({ 'n': n }).rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = 0;
  var solve = function(row, currentBoard) {
    if (row === n) {
      solutions++;
    } else {
      for (var i = 0; i < n; i++) {
        currentBoard.togglePiece(row, i);
        if (!currentBoard.hasAnyQueensConflicts()) {
          solve(row + 1, currentBoard);
        } 
        currentBoard.togglePiece(row, i);       
      }
    }
  };

  solve(0, new Board({ 'n': n }));
  return solutions;
};
