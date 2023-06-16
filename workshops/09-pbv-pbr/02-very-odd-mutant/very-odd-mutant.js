// YOUR CODE BELOW

// function veryOddMutant(allTheNums) {
//     // let countRemoved = 0;
//     // for (i = 0; i < allTheNums.length; i++){
      
//     //     if (allTheNums[i] % 2 === 0) {
//     //         allTheNums[i] = 'normie';
//     //         countRemoved++
//     //     }
        
//     // }

//     // return countRemoved;
    
    
// }


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
  
  // Test the function
  let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
  let countRemoved = veryOddMutant(allTheNums);
  
  console.log('allTheNums:', allTheNums);
  // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie']
  
  console.log('countRemoved:', countRemoved);
  // 4
  


// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
// // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log('countRemoved:', countRemoved);
// // 4
