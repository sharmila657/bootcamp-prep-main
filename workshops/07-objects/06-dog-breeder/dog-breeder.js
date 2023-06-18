// YOUR CODE BELOW
debugger
function dogBreeder(name, age) {
    let object = {

    }
    if (typeof name === "number") {
        object["name"] = "Steve"
        object["age"]= name
        
    }
    else {
        object.name = name || "Steve"
        object.age = age || 0
    }
    
    return object;

}
console.log(dogBreeder(15));
console.log(dogBreeder("Sam", 15));

