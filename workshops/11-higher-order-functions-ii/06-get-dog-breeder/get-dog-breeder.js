// YOUR CODE BELOW
function getDogBreeder(defaultName = "steve", defaultAge = 0) {
    return function getDogBreeder(newName, newAge) {
        if (!(newName || newAge)) {
            return{name:defaultName, age:defaultAge}
        }
        else if (typeof newName === "number") {
            return{name:defaultName, age:newName}
        }
        else if (!newAge) {
            return{name:newName, age:defaultAge}
        }
        else {
            return {
                name:newName, age:newAge
            }
        }
    }
}


let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

console.log(puppyFarm('Olaf', 3));
console.log(puppyFarm(2));

console.log(rescueShelter());
