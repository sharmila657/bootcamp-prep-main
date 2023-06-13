// YOUR CODE BELOW
function myJoin(array, separator = ',') {
    debugger
    let result = '';
  
    for (let i = 0; i < array.length; i++) {
      if (i !== 0) {
        result += separator;
      }
  
      if (array[i] === null || array[i] === undefined) {
        result += '';
      } else {
        result += array[i];
      }
    }
  
    return result;
  }
console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' '));
console.log(myJoin(['a', 'b', 'c'], '+'));
console.log(myJoin(['Peter', 'Paul', 'Mary']));
console.log(myJoin(['hello', undefined, 'world'], '-'));
