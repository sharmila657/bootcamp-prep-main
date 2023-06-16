// YOUR CODE BELOW

function veryOddMutant(numbers) {
    let countRemoved = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        numbers[i] = 'normie';
        countRemoved++;
      }
    }
  
    return countRemoved;
  }


let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log('allTheNums:', allTheNums);

console.log('countRemoved:', countRemoved);
