// YOUR CODE BELOW
debugger

function deeperCopy(arr) {
    const copy = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        copy[i] = deeperCopy(arr[i]);
      } else {
        copy[i] = arr[i];
      }
    }
  
    return copy;
  }
  
 
  let myArray = [1, [2, 3]];
  
  let copy = deeperCopy(myArray);
  copy[1].push(4);
  
  console.log(myArray); // [1, [2, 3]]
  
  let copy2 = myArray.slice();
  copy2[1].push(4);
  
  console.log(myArray); // [1, [2, 3, 4]]
  