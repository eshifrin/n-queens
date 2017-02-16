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
  var solution = [];

  var solve = function(row, currentBoard) {
    if (row === n) {
      var currentRows = currentBoard.rows();
      var boardCopy = [];
      for (var r = 0; r < n; r++) {
        var rowCopy = [];
        for (var c = 0; c < n; c++) {
          rowCopy[c] = currentRows[r][c];
        }
        boardCopy.push(rowCopy);
      }
      solution = solution.concat([boardCopy]);
    } else {
      for (var i = 0; i < n; i++) {
        currentBoard.togglePiece(row, i);
        if (!currentBoard.hasAnyRooksConflicts()) {
          solve(row + 1, currentBoard);
          currentBoard.togglePiece(row, i);
        } else {
          currentBoard.togglePiece(row, i);       
        }
      }
    }
  };

  solve(0, new Board({ 'n': n }));

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution[0]));
  return solution[0];
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
