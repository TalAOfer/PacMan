'use strict'
const WALL = '#'
const FOOD = '.'
const SUPERFOOD = '@'
const EMPTY = ' ';
const CHERRY = '&#127826'

var gBoard;

var gGame = {
    score: 0,
    isOn: false
}

var gFoodCount

var gCherryInterval

function init() {
    closeModal()
    gFoodCount = 60
    console.log('hello')
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    gGame.isOn = true
    gCherryInterval = setInterval(createCherry, 15000)
}

function buildBoard() {
    const SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }

            if (i === 1 && j === 1 ||
                i === 1 && j === 8 ||
                i === 8 && j === 1 ||
                i === 8 && j === 8) {
                board[i][j] = SUPERFOOD;
            }
        }
    }
    return board;
}



function updateScore(diff) {
    // DONE: update model and dom

    // Model
    gGame.score += diff
    //DOM
    document.querySelector('h2 span').innerText = gGame.score

}

function createCherry() {
    // debugger
    var emptyCells = []
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var currCell = gBoard[i][j]
            if (currCell === ' ') {
                emptyCells.push({ i, j })
            }
            
        }

    }
    shuffle(emptyCells)
    var emptyCell = emptyCells.pop()
    if (!emptyCell) return
    gBoard[emptyCell.i][emptyCell.j] = CHERRY
    renderCell(emptyCell, CHERRY)
}

function gameOver() {
    console.log('Game Over');
    // TODO
    clearInterval(gIntervalGhosts)
    clearInterval(gCherryInterval)
    renderCell(gPacman.location, '🪦')
    gGame.isOn = false
    if (gFoodCount === 0) openModal(true)
    else openModal(false)
}

