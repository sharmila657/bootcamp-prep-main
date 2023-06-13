// YOUR CODE BELOW
function removeColumns(firstGrid, numColumns) {
    debugger
    let newGrid = [];

    for (let i = 0; i < firstGrid.length; i++){
        let newRow = [];
        for (let j = 0; j < firstGrid[i].length; j++){
            if (j >= numColumns) {
                newRow.push(firstGrid[i][j]);
            }
        }
        newGrid.push(newRow);

    }
    return newGrid;
    
}

console.log(removeColumns([[1, 2, 3],
[1, 2, 3],
[1, 2, 3],
[1, 2, 3]], 2));