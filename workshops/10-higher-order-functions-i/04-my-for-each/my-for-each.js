// YOUR CODE BELOW
debugger
function myForEach(array, myFunc) {
    for (i = 0; i < array.length; i++){
        myFunc(array[i],i)
    }
}
let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum);