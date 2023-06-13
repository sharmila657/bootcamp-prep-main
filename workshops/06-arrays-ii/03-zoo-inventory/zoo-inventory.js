// YOUR CODE BELOW

function zooInventory(zoo) {
    let sentences = [];
    for (let i = 0; i < zoo.length; i++){
        let animal = zoo[i][0];
        let species = zoo[i][1][0];
        let age = zoo[i][1][1];

        let sentence = "{animal} the {species} is {age}"
        sentences.push(sentence);
    }
    return sentences;
    
}
let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];

console.log(zooInventory(myZoo));