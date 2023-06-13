// YOUR CODE BELOW
function mySlice(originalArray, startIdx, endIdx) {
    let newArray = [];

    
    // console.log(originalArray)
   //     let copyArray = [];
    //     for (let i = startIdx; i < endIdx; i++){
    //         copyArray.push(originalArray[i])

    if (startIdx === undefined && endIdx === undefined) {
        return originalArray;
    
    }

    if (startIdx !== undefined && endIdx === undefined) {
        for (let i = startIdx; i < originalArray.length; i++) {
            newArray.push(originalArray[i])
        }
    }
    if (startIdx !== undefined && endIdx !== undefined) {
        for (i = startIdx; i < endIdx; i++) {
            newArray.push(originalArray[i])
        
        }
    }
    let end = originalArray.length - startIdx;

    if (startIdx < 0 && endIdx === undefined) {
        for (i = 0; i <= end; i++) {
            newArray.push(originalArray[i]);
        }
    }
      if (startIdx < 0 && endIdx === undefined){
       for (let i = 0 + 1; i <= endIdx; i++){
            newArray.push(originalArray[i])
        }
    }
    
    // if (startIdx < 0 && endIdx === undefined) {
    //     newArray = originalArray.length + endIdx;
    //   }
    return newArray;
}

// console.log(mySlice([1, 2, 3], 1, 2));
// console.log(mySlice([1, 2, 3], 1));
// console.log(mySlice([1, 2, 3]));
console.log(mySlice([1, 2, 3],-1));






