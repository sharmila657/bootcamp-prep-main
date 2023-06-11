// YOUR CODE BELOW

// function unShift(array, value) {
//     let newArray = [value];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(value);
//     }
//     return newArray;   
// }
// console.log(unShift([1, 2, 3], 0));

function unShift(array, value) {
    let newArray = [value];
    for (let element of array) {
        newArray.push(element);
    
    }
    return newArray;
}
console.log(unShift([1, 2, 3], 0))
Array.isArray

















