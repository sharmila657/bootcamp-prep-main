// YOUR CODE BELOW

function veryOddMutant(allTheNums) {
    let countRemoved = 0;
    for (i = 0; i < allTheNums.length; i++){
      
        if (allTheNums[i] % 2 === 0) {
            allTheNums[i] = 'normie';
            countRemoved++
        }
        
    }

    return countRemoved;
    
    
}


let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log('allTheNums:', allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log('countRemoved:', countRemoved);
// 4
