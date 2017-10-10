<template>
    <div class="component">
        Welcome to first Component.
        <div v-for="row, index in board">
            <div v-on:click="addDisk(1, index, row)">
                {{row}}
            </div>
        </div>
    </div>
</template>

<script>
let initialGameState = [[0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0]] 
var gameState = initialGameState

export default {
    data() {
        return {
            board: gameState
        }
    },

    methods: {
        colAvailable(index, row) {
            return row.filter((disk) => { return disk == 0}).length > 0
        },

        addDisk(player, index, row) {
            if (this.colAvailable(index, row)) {
                for (let disk in row) {
                    if (disk == 0) {
                        row.push(player)
                        row.splice(0, 1)
                        if (player == 1) {
                            this.goPlayerTwo()
                        }
                        return true
                    }
                }
            }
            else {
                return false
            }
        },
        goPlayerTwo() {
            let row = 0
            if (!this.colAvailable(0, this.board[row])) {
                row++
                this.addDisk(2, 0, this.board[row])
            }
            else {
                this.addDisk(2, 0, this.board[row])
            }
        }
    }
}

</script>
