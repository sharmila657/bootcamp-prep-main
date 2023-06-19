// YOUR CODE BELOW
debugger
function chainReaction(startVal, arrayFunc) {
    let num = startVal;
    for (let i = 0; i < arrayFunc.length; i++){
        num = arrayFunc[i](num);
    }
    return num;
}

function addTen(num) {
    return num + 10;
  }
  
  function subtractFive(num) {
    return num - 5;
  }
  
  function multiplyFive(num) {
    return num * 5;
  }


console.log(chainReaction(0, [addTen, subtractFive, multiplyFive]));
console.log(chainReaction(0, [subtractFive, multiplyFive, addTen])); 