// YOUR CODE BELOW

function crazyCaps(string){
    debugger
    let letters = ""
    
    for(let i = 0; i<string.length; i++){

    if( i %2 !==0 ){
     letters += string[i].toUpperCase()
    }
    else {
    letters += string[i].toLowerCase()
    }

    }
    
    return letters
    }

    console.log(crazyCaps('fullstack is amazing'));
