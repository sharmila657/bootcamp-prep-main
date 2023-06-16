// YOUR CODE BELOW
function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
        const temp = arr[left];
    
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  
  
  let myArray = [1, 2, 3, 4];
  reverse(myArray);
  console.log(myArray); 
  