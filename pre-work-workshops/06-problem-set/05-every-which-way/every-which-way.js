// YOUR CODE BELOW

function everyWhichWay(n1, n2, n3){
    
    if (n1 + n2 === n3){
        return 'sum';
    }
    else if (n1 - n2 === n3){
        return 'difference';
    }
    else if (n1 * n2 === n3){
        return 'product';
    }
    else if(n1 / n2 === n3){
        return 'fraction';
    }
    else {
        return null;
    }
}
console.log(everyWhichWay(10, 20, 30));
console.log(everyWhichWay(50, 20, 30));
console.log(everyWhichWay(4, 4, 16));
console.log(everyWhichWay(100, 10, 10));
console.log(everyWhichWay(1, 1000, 50));
