// YOUR CODE BELOW

let ticTacToe = {
    board: [[null, null, null],
           [null, null, null],
            [null,null,null]],
    move: function (character, rowNum, columnNum) {
        if (this.board[rowNum][columnNum] === null) {
            this.board[rowNum][columnNum] = character;
            console.log(this.board);
        }
        else {
            console.log("has used already")
        }
        return this.board

        
    },
    clear: function () {
        this.board = [[null, null, null],
        [null, null, null],
        [null, null, null]],
            console.log(this.board);
        return this.board;
        
        
    }
    
    
}
ticTacToe.move('X', 0, 0);
ticTacToe.move('O', 1, 1);
ticTacToe.move('X', 2, 2);
ticTacToe.clear();