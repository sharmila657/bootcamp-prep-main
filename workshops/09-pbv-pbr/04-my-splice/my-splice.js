// YOUR CODE BELOW
function mySplice(arr, start, deleteCount, element) {
    const removed = [];
    
    for (let i = 0; i < deleteCount; i++) {
      removed.push(arr[start + i]);
    }
    
    let afterSlice = [];
    
    for (let i = start + deleteCount; i < arr.length; i++) {
      afterSlice.push(arr[i]);
    }
    
    arr.length = start;
    
    if (element !== undefined) {
      arr.push(element);
    }
    
    for (let i = 0; i < afterSlice.length; i++) {
      arr.push(afterSlice[i]);
    }
    
    return removed;
  }
  
  let myArray = [1, 2, 3];
  
  console.log(mySplice(myArray, 1, 1, 'apples')); 
  console.log(myArray); 
  