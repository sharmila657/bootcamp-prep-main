// YOUR CODE BELOW
function makeGrid(Colums, Rows) {
    debugger
    let grid = [];

    for (let i = 0; i < Rows; i++) {
        let row = [];
        
        for (let j = 1; j <= Colums; j++){
            row.push(j);
        }
        grid.push(row);
        
    }
    return grid;
}
console.log(makeGrid(3, 4));