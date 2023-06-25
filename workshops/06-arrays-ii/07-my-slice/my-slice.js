// YOUR CODE BELOW
function mySlice(originalArray, startIdx, endIdx) {
    let newArray = [];

    
   if (startIdx === undefined) {
        return originalArray.slice();
    
    }

    // if (startIdx !== undefined && endIdx === undefined) 
    
    if (startIdx < 0) {
        startIdx = originalArray.length + startIdx;
    }

    if (endIdx === undefined || endIdx > originalArray.length) {
        endIdx = originalArray.length;
    }
    else if (endIdx < 0) {
        endIdx = originalArray.length + endIdx;
    }
    for (let i = startIdx; i < endIdx; i++){
            newArray.push(originalArray[i])
    }
    return newArray;
    }
    


console.log(mySlice([1, 2, 3], 1, 2));
console.log(mySlice([1, 2, 3], 1));
console.log(mySlice([1, 2, 3]));
console.log(mySlice([1, 2, 3],-1));






