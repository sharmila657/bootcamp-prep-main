// // YOUR CODE BELOW


debugger
function mostVowels(arg1) {
    let currentvowel = 0;
    let highestvowel = 0;
    let currentletter = "";
    let highestvowelletter = ""; 
    for (let i = 0; i < arg1.length; i++){
        if (arg1[i] === "a" || arg1[i] === "e" || arg1[i] === "i" || arg1[i] === "o"|| arg1[i] === "u"|| arg1[i] === "I") {
            currentvowel++
        }
        if (arg1[i] === " ") {
            if (currentvowel > highestvowel) {
                highestvowel = currentvowel
                highestvowelletter = currentletter
            }
            currentletter = ""
            currentvowel = 0;


            
        }
        else {
            currentletter += arg1[i]
        }


    }

    return highestvowelletter;
    
}
console.log(mostVowels('gi fe peev '));
console.log(mostVowels("Peeves"));
console.log(mostVowels('I am a keeper with some real rhythms'));



