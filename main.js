var initailBoard = [[0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0]]
var gameBoard = initailBoard

function goPlayerTwo() {
    let row = 0
    while (!colAvailable(row)) {
        row++
    }
    addDisk(2, row)
}

function goPlayerOne(index) {
    var col = gameBoard[index]
    if (colAvailable(index)) {
        addDisk(1, index)
        goPlayerTwo()
    }
}

function addDisk(player, index) {
    var col = gameBoard[index]
    for (let disk in col) {
        if (disk == 0) {
            col.push(player)
            col.splice(0, 1)
            gameBoard[index] = col
            render()
        }
    }
}

function colAvailable(index) {
    return gameBoard[index].filter((disk) => { return disk == 0}).length > 0
}

function render() {
    document.getElementById('app').innerHTML = ''
    var el = '<div class="board-col"><br />'
    for (var [index, col] of gameBoard.entries()) {
        for (var row of col) {
            el += '<div class="board-cell" onclick="goPlayerOne('+ index + ')">  ' + col[row] + '  </div>'
        }
        el += '</div>'
    }
    document.getElementById('app').innerHTML += el
}

render()
