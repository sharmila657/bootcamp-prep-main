// // YOUR CODE BELOW




function myIncludes(array, searchValue) {
    debugger
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element === searchValue) {
            return true;

        }
        
        }
    return false;
    }
     
console.log(myIncludes([10, 20, 30], 20));

console.log(myIncludes(['apples', 'bananas', 'citrus'], 'pears'));

