"use strict"


var sudokuboard = [];


var fs = require('fs')
var soal = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[1]


var SudokuSolver = require('sudoku-solver');

SudokuSolver.solve({
    problem: soal
  , style: true
  , initial: true
}).printSolution();
