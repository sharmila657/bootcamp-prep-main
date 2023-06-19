// YOUR CODE BELOW
debugger


function functionLogger(squareNum,num){
    return  squareNum(num);
}

function squareNum(num){
    return num*num;
}

let squareOfFour =functionLogger(squareNum,4);
console.log(squareOfFour)


