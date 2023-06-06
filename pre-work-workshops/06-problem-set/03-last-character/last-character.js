// YOUR CODE BELOW

function lastCharacter(name1,name2){
    //last character of string
    let lastchar1 = name1.at(-1)
    let lastchar2 = name2.at(-1)

//check two strings end with same character
    if (lastchar1 === lastchar2 ){
        return true;

    }
    else {
        return false;
    }
}
console.log(lastCharacter('apples','pumpkins'));
console.log(lastCharacter('marker','pen'));