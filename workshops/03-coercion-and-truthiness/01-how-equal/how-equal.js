// YOUR CODE BELOW

function howEqual(num1, num2) {

    if (num1 === num2) {
        return "strictly";
    }
    else if (num1 == num2) {
        return "loosely";
    }
    else {
        return "not equal"
    }
    
}
console.log(howEqual(0, "0"));
console.log(howEqual(3, 9 / 3));
console.log(howEqual(true, "truthy"));