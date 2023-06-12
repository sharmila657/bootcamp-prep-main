// YOUR CODE BELOW

function evenAndOdd(array) {
    debugger
    let newArray = [];
    let addnewarray = [];


    
    for (i = 0; i < array.length; i++){
        let num = array[i];
    
        if (num % 2 !== 0) {
            addnewarray.push(num)

        }
        else {
            newArray.push(num)


        }
       
    }
    

    // console.log(addnewarray)
    // console.log(newArray)
    return [newArray,addnewarray]
}
console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));

