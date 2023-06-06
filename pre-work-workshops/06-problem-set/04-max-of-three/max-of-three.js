// YOUR CODE BELOW
 function maxOfThree(n1, n2, n3){
    let max_no;

    if (n1 > n2){
        max_no = n1;
    }
    else {
        max_no = n2;
    }
    if (n3 > max_no){
        max_no = n3
    }
    return max_no;


 }
 console.log(maxOfThree(5, 4, 10));
 console.log(maxOfThree(7, 7, 4));