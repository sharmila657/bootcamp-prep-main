
function oddCouple(numbers) {
    let oddNumbers = [];
    for (let num of numbers) {
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













