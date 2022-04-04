'use strict'
const PACMAN = '😷';

var gPacman;
function createPacman(board) {
    // DONE
    gPacman = {
        location: {
            i: 2,
            j: 2
        },
        isSuper: false
    }
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {
    // DONE: use getNextLocation(), nextCell
    if (!gGame.isOn) return
    var nextLocation = getNextLocation(ev.key)
    var nextCell = gBoard[nextLocation.i][nextLocation.j]


    // DONE: return if cannot move
    if (nextCell === WALL) return
    // DONE: hitting a ghost?  call gameOver

    if (nextCell === GHOST) {
        if (gPacman.isSuper) {
            eatGhost(nextLocation.i, nextLocation.j)
        }
        else {
            gameOver()
            return
        }
    }


    if (nextCell === FOOD) {
        updateScore(1)
        gFoodCount--
    }

    if (nextCell === CHERRY) {
        updateScore(10)
        gFoodCount--
    }

    if (nextCell === SUPERFOOD) {
        if (gPacman.isSuper === true) { return }
        else {
            gPacman.isSuper = true
            changeGhosts()
            setTimeout(function () {
                gPacman.isSuper = false
                console.log('back to normal')
            }, 5000)
        }
    }


    // DONE: moving from current position:
    // DONE: update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // DONE: update the DOM
    renderCell(gPacman.location, EMPTY)


    // DONE: Move the pacman to new location
    // DONE: update the model
    gPacman.location = nextLocation
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
    // DONE: update the DOM
    renderCell(gPacman.location, PACMAN)
}


function getNextLocation(eventKey) {
    // DONE: figure out nextLocation
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }

    switch (eventKey) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;

        default:
            return null;
    }

    return nextLocation;
}


function eatGhost(i, j) {
    for (var index = 0; index < gGhosts.length; index++) {
        if (gGhosts[index].location.i === i && gGhosts[index].location.j === j)
        var eatenGhostIndex = index
    }
    var deadGhost = gGhosts.splice(eatenGhostIndex, 1)
    console.log(gGhosts)
    setTimeout(function() {gGhosts.push(deadGhost[0])}, 5000)
    console.log(gGhosts)
}
