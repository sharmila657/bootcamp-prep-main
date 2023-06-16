// YOUR CODE BELOW


function defaultGreet(fName , lName = "Doe"){
    // console.log("Hi" , fName , lName)   
    
    // return ("Hi" + " " + fName + " " + lName + "!")
    if (fName && lName) {
        return ("Hi" + " " + fName + " " + lName + "!")
    }
    else {
        return ("Hi" + " " + fName + " " + lName + "!")


    }
    

    
    
    
}

console.log(defaultGreet("Chaka","Khan"));
console.log(defaultGreet("John"));