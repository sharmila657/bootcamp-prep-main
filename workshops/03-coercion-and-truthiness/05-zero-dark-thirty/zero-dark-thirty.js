// YOUR CODE BELOW

function zeroDarkThirty(num) {
    debugger
    let newNum = ""
    if (num === 0) {
        return NaN
    }

    else {
        let convertNum = String(num);
        for (let i = 0; i < convertNum.length; i++) {
            if (convertNum[i] !== "0") {
                newNum += convertNum[i];
            }
        }
        return Number(newNum);
    }
}

console.log(zeroDarkThirty(102302));
console.log(zeroDarkThirty(606.203));
console.log(zeroDarkThirty(0))



