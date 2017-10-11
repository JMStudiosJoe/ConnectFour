var initailBoard = [[0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0]]

function initializeBoard() {

}

function render() {
    var el = '<div>'
    for (var col of initailBoard) {
        for (var row of col) {
            el += col[row] + '</div>'
        }
    }
    document.getElementById('app').innerHTML += el
}

render()
