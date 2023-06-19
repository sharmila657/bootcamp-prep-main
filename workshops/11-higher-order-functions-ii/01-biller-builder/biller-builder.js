// YOUR CODE BELOW
debugger
let NYFunc = function(price)
{
    return price * 1.03 * 1.04; 
}

let NJFunc = function(price)
{
    return price * 1.05 * 1.06625;
}
function billerBuilder(state)
{
    if(state === 'NY')
    {
        return NYFunc;
    }
    return NJFunc;
}



let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100));

let newJersBiller = billerBuilder('NJ')
console.log(newJersBiller(100));