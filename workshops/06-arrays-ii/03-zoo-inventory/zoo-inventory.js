// YOUR CODE BELOW

function zooInventory(zoo) {
    let inventory = [];
    for (let i = 0; i < zoo.length; i++){
        let animal = zoo[i][0];
        let species = zoo[i][1][0];
        let age = zoo[i][1][1];

        let sentence = animal + " the " + species + " is " + age + ".";
        inventory.push(sentence);
    }
    return inventory;
    
}
let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];

console.log(zooInventory(myZoo));