// YOUR CODE BELOW

function myMnemonic(name1, name2, name3, name4){
    let str = "";

    if (name1){
        str += name1[0]
    }
    if (name2){
        str += name2[0]
    }
    if (name3){
        str += name3[0]
    }
    if(name4){
        str += name4[0]
    }
    // str += name1[0];

    // str = str + name1[0] + name2[0] + name3[0] + name4[0]

    return str;

}

console.log(myMnemonic("Must", "Accept", "Sugar", "Happiness"))
console.log(myMnemonic("We","Eat","Eggs"))
