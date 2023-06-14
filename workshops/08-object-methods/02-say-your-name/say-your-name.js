// YOUR CODE BELOW


let me2 = {
    name: "Tarana",

    getGreeting: function (name2) {
    
       return "Hi " + name2.name + "," + " my name is " + this.name + "."
    }
    
}

let you = {
    name: "Alysaa",
}




console.log(me2.name);
console.log(you.name);
debugger;
console.log(me2.getGreeting(you));
