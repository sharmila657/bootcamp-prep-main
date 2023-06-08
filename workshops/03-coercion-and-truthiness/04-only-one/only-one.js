// YOUR CODE BELOW
function onlyOne(ar1, ar2, ar3) {
    if (!ar1 && !ar2 && ar3) {
        return true
    }
    else if (!ar1 && ar2 && !ar3) {   //! (not false or not true)
        return true
    }
    else if (ar1 && !ar2 && !ar3) {
        return true
    }
    else {
        return false
    }
    
}
console.log(onlyOne(false, false, true));
console.log(onlyOne(0, 1, 2))