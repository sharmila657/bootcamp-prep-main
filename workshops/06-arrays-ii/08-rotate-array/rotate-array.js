// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
    newArray = originalArray.slice();

    if (rotateNum > 0) {
        for (let i = 0; i < rotateNum; i++){
            lastElement = newArray.pop();
            newArray.unshift(lastElement);
        }
    }
    else if (rotateNum < 0) {
        for (let i = 0; i > rotateNum; i--){
            firstElement = newArray.shift();
            newArray.push(firstElement);
        }
    }
 
    return newArray; 
}
console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], -1));
console.log(rotateArray([1, 2, 3, 4, 5], 0));
