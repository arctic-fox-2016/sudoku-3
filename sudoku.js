"use strict"

var fs = require('fs')
var SudokuSolver = require('sudoku-solver');
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

console.log(board_string)
SudokuSolver.solve({
    problem: board_string
  , style: true
  , initial: true
}).printSolution();
