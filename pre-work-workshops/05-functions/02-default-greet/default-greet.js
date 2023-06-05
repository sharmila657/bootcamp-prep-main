// YOUR CODE BELOW


function defaultGreet(fName , lName = "Doe"){
    console.log("Hi" , fName , lName)   
    
    return ("Hi" +" " +fName + " " + lName + "!" )
    
    
    
}
defaultGreet("Chaka","Khan");
defaultGreet("John");