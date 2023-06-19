let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW
debugger;

function petSounds(animal, country) {
  let newString = ''
  for (let k = 0; k < animalNoises.length; k++) {
      let element = animalNoises[k]
      for (key in element) {
          if (key === animal) {
              let sound = element[key][country]
              finalString =
                  animal.charAt(0).toUpperCase() +
                  animal.slice(1) + 's' +' in ' + country +' say ' + sound
          }
      }
  }
  console.log(newString)
  return newString
}
console.log(petSounds('dog', 'Iceland')); 

console.log(petSounds('cat','Korea'))



























































// function petSounds(animal, country) {
//   // Find the object that matches the animal
//   const animalObject = animalNoises.find(obj => obj.animal === animal);

//   // If the animal is not found, return null
//   if (!animalObject) {
//     return null;
//   }

//   // Find the noise that matches the country
//   const noise = animalObject.noises[country];

//   // If the country is not found, return null
//   if (!noise) {
//     return null;
//   }

//   // Construct and return the sentence
//   return `${animalObject.animal}s in ${country} say ${noise}`;
// }
