// YOUR CODE BELOW

function stringify(callback) {
    return function () {
        let myFunc = callback();
        return myFunc.toString();

    }
        
}


function returnsANumber() {
    return 100;
}

let newFunction = stringify(returnsANumber);
console.log(newFunction());
