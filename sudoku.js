"use strict"

var sudokuboard = [];

//
// sudoku_2_chooseoal(7)
// solve();
var fs = require('fs')
var soal = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var SudokuSolver = require('sudoku-solver');

SudokuSolver.solve({
    problem: soal
  , style: true
  , initial: true
}).printSolution();
