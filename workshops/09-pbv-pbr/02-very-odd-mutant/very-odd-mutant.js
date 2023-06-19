// YOUR CODE BELOW

function veryOddMutant(allTheNums){
  let count=0

  for(let i=0;i<allTheNums.length;i++){
      if(allTheNums[i]%2===0){
          allTheNums[i]="normie"
          count++
      }
  }
  return count;
}

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);

// console.log('countRemoved:', countRemoved);
