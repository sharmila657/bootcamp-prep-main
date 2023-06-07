// YOUR CODE BELOW

function bacteriaTime(currentNum, targetNum) {
    debugger
    
    let time = 0;
    if (currentNum < targetNum) {
        for (let i = currentNum; i < targetNum; i = i * 2) {
        
            time += 20;

        }
        return time;
    }
    else {
        return "targetNum must be larger than currentNum";
    }
}
console.log(bacteriaTime(1, 8));
console.log(bacteriaTime(8,1))