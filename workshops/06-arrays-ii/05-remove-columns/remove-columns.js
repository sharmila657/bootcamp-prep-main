// YOUR CODE BELOW



function removeColumns(originalGrid, numColumns) {
    
    let newGrid = [];
  
    for (let i = 0; i < originalGrid.length; i++) {
      let newRow = [];
  
      for (let j = 0; j < originalGrid[i].length - numColumns; j++) {
        newRow.push(originalGrid[i][j]);
      }
  
      newGrid.push(newRow);
    }
  
    return newGrid
}
 
console.log(removeColumns([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 2)); 
  
    