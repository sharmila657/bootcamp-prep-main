// YOUR CODE BELOW
function makeGrid(colums, rows) {
    let row = [];
    for (let i = 0; i < rows; i++) {
        let colum = [];
        for (let j = 1; j <= colums; j++){
            colum.push(j)


        }
        row.push(colum)
        
    }
    return row;
}
console.log(makeGrid(3, 4));



