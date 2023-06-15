// YOUR CODE BELOW
debugger
function veryOdd(allTheNums) {
    let newArray = [];
    
    for (i = 0; i < allTheNums.length; i++) {
        let num = allTheNums[i];
        if (num % 2 !== 0) {
            newArray.push(num);
            

        }
      }
    return newArray
    
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums: ', oddNums);
console.log('allTheNums:', allTheNums);




