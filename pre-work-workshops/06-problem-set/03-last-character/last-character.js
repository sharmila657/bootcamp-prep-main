// YOUR CODE BELOW

function lastCharacter(name1,name2){
    
    let lastchar1 = name1.at(1)
    // console.log(lastchar1)
    let lastchar2 = name2.at(-1)
    console.log


    if (lastchar1 === lastchar2 ){
        return true;

    }
    else {
        return false;
    }
}
console.log(lastCharacter('apples','pumpkins'));
console.log(lastCharacter('marker','pen'));