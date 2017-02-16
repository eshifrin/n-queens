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
  var solution = [];

  //return solution when you find it dumbasses
  var solve = function(row, currentBoard) {
    if (row === n) {
      var currentRows = currentBoard.rows();
      var rowCopy = currentRows.map(r => r.slice());
      solution = solution.concat([rowCopy]);
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
  if (solutions) {
    return solution;
  } else {
    return solution[0];
  }
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = findNRooksSolution(n, true).length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n, solutions) {
  var solution = [];

  //return solution when you find it dumbasses
  var solve = function(row, currentBoard) {
    if (row === n) {
      var currentRows = currentBoard.rows();
      var rowCopy = currentRows.map(r => r.slice());
      solution = solution.concat([rowCopy]);
    } else {
      for (var i = 0; i < n; i++) {
        currentBoard.togglePiece(row, i);
        if (!currentBoard.hasAnyQueensConflicts()) {
          solve(row + 1, currentBoard);
          currentBoard.togglePiece(row, i);
        } else {
          currentBoard.togglePiece(row, i);       
        }
      }
    }
  };

  solve(0, new Board({ 'n': n }));

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution[0]));
  if (solutions) {
    return solution;
  } else if (solution.length === 0) {
    return new Board({ 'n': n }).rows();
  } else {
    return solution[0];
  }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = findNQueensSolution(n, true).length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
