// // YOUR CODE BELOW
// let arr = ""
// function myIncludes() {
//     console.log(myIncludes())
//     arr.includes(arr)
    
// }
// console.log(myIncludes([10, 20, 30],20))




function myIncludes(array, searchValue) {
    for (let element of array) {
        if (element === searchValue) {
            return true;

        }
        }
    return false;
    }
     
console.log(myIncludes([10, 20, 30], 20));
console.log(myIncludes(['apples', 'bananas', 'citrus'], 'pears'));

