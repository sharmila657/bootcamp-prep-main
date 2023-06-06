// YOUR CODE BELOW

function bacteriaTime(currentNum,targetNum){
    debugger
    
    let time = 0
    for(let i=currentNum; i < targetNum; i= i * 2 ){
        
            time += 20

        }
    return time
   }
console.log(bacteriaTime(1, 8));
