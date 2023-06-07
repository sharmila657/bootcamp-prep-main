// YOUR CODE BELOW

function mySlice(originalString, startIdx, endIdx) {
    if (startIdx === undefined) {
        startIdx = 0;
        return originalString;
    }
    else if (endIdx === undefined) {
        endIdx = originalString.length;
    }
    let slicedString = "";
    
    for (let i = startIdx; i < endIdx && i < originalString.length; i++){
        slicedString += originalString[i];
    }
    return slicedString
    
}
console.log(mySlice("slice and dice", 2));
console.log(mySlice("slice and dice", 2, 5));
console.log(mySlice("slice and dice"));