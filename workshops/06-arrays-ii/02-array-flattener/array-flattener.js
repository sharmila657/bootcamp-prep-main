// YOUR CODE BELOW


function arrayFlattener(array) {
    debugger
    let flattenedArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        nestedArray = arrayFlattener(array[i]);
        flattenedArray = flattenedArray.concat(nestedArray);
      } else {
        flattenedArray.push(array[i]);
      }
    }
  
    return flattenedArray;
}
console.log(arrayFlattener([1,[2, 3], 4])); 
  
  