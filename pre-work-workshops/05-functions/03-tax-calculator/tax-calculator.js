// YOUR CODE BELOW

 function taxCalculator(price,state){
    if (state=== "NY"){
        return price/100*4 + price 
    }

    else if(state === "NJ"){
        return price/100*6.625 + price 
    }
   
    // let aftertax = 4%
    // let aftertax = 6.625%




 }
 

 console.log(taxCalculator(50, "NY"))
 console.log(taxCalculator(50, "NJ"))