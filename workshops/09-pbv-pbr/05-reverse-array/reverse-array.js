// YOUR CODE BELOW
function reverseArray(array){
  let tempArray=[]
  for(let i=array.length-1;i>=0;i--){
      tempArray.push(array[i])
  }
  console.log(tempArray)
  while(array.length){
      array.pop()
  }
  for(let i=0;i<tempArray.length;i++){
      array.push(tempArray[i])
  }
  return array;
}
// let myArray = ["here","we","go"];
reverseArray(["here","we","go"]);
// console.log(myArray)
  