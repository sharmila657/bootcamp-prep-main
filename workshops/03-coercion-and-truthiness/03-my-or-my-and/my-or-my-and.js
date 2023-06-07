// YOUR CODE BELOW

function myOr(b1, b2, b3) {
    // debugger
    if (b1) {

        return b1;
    }
    else if (b2) {
        return b2;
    }
    
    else {
        return b3
    }
    
}


function myAnd(b4, b5, b6) {
    // console.log(Boolean(b4))
    // console.log(Boolean(!b4))
    debugger
    if (!b4) {   //b4 false ho vane matrai yo code block vitra pas vanyo, esle b4 ko value lai convert gareko haina.
        return b4
    }
    else if (!b5) {
        return b5
    }
    else {
        return b6
    }
}
// console.log(myOr('apples', 1, false))

console.log(myOr(true, true, false));
console.log(myAnd(1, 'apple', 2));
console.log(myAnd(1, 0, 2));
