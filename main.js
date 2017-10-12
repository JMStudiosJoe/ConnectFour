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
    render()
}

function addDisk(player, index) {
    var col = gameBoard[index]
    var insertedRow = 0
    for (let [rowIndex, disk] of col.entries()) {
        if (disk == 0) {
            col.push(player)
            col.splice(0, 1)
            checkWin(player)
            return
        }
    }
}

function checkWin(player) {
    var playerCellCount = 0
    function checkLeftRight(col, row) {

    }
    function checkUpDown(col, row) {
        
    }
    function checkDiagRight(col, row) {
        
    }
    function checkDiagLeft(col, row) {
        
    }
    function checkUpDown(col, row) {
        
    }
    
    for([colIndex, col] of gameBoard.entries()) {
        for ([rowIndex, cell] of col.entries()) {
            
        }
    }

}

function colAvailable(index) {
    return gameBoard[index].filter((disk) => { return disk == 0}).length > 0
}

function render() {
    var element = document.getElementById('app')
    element.innerHTML = ''
    var el = ''
    gameBoard.map( (col, index) => {
        el += '<div class="board-col"><br />'
        for (var row of col) {
            el += '<div class="board-cell" onclick="goPlayerOne('+ index + ')">' + row + '</div>'
        }
        el += '</div>'
    })
    element.innerHTML += el
}

render()
