// YOUR CODE BELOW
debugger
function cloneMachine(animal) {
    let clone = {
        name: animal.name + 'Clone',
        species: animal.species,
        offspring: []
    };
    animal.offspring.push(clone.name);

    return clone;
    
}

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
  }
  
let dollyClone = cloneMachine(dolly);

console.log(dollyClone)   
console.log(dolly) 