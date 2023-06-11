
function oddCouple(numbers) {
    debugger
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num % 2 !== 0) {
            oddNumbers.push(num);
            if (oddNumbers.length === 2) {
                break;
            }
        }
    }
    return oddNumbers;
}

console.log(oddCouple([1, 2, 3, 4, 5]))
console.log(oddCouple([10, 15, 20]));
console.log(oddCouple(2, 4, 6, 8));













