let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
// function leetTranslator(char) {
//     let newChar = [];
//     let value = [];
//     for (let i = 0; i < letters.length; i++){
//         if (newChar[i] === letters[i]) {
//             value = i;
//         }
//     }
//     for (let i = 0; i < leetChars.length; i++){
//         if (value[i] === leetChars[i]) {
//             newChar = leetChars[i];
//         }

//     }
//     for (let i = 0; i < char.length; i++){
//         let  = char[i].toLowerCase();
//     }
//     return newChar.join();
    

// }
// // console.log(leetTranslator("Sharmila"))


// console.log(leetTranslator('Fullstack') )

function leetTranslator(objectChar)
{
   let newWord = [];
   let value = [];
   for(let i=0; i<letters.length; i++)
   {
        if(newWord[i] === letters[i])
        {
            value = i;
        }
   }
   for(let i=0; i<leetChars.length; i++)
   {
        if(value[i] === leetChars[i])
        {
            newWord = leetChars[i];
        }
   }
   for(let i=0; i<objectChar.length; i++)
   {
    let l = objectChar[i]. toLowerCase();
   }
   return newWord.join();
}
leetTranslator("Sharmila");





























// function leetTranslator(string) {
//     let leetCodex = {};
//     let translatedString = '';
  
//     // Create the leetCodex object using the provided arrays
//     for (let i = 0; i < letters.length; i++) {
//       leetCodex[letters[i]] = leetChars[i];
//     }
  
//     // Translate each character of the string
//     for (let char of string.toLowerCase()) {
//       // If the character is in the leetCodex, append the leet equivalent
//       if (char in leetCodex) {
//         translatedString += leetCodex[char];
//       } else {
//         translatedString += char; // Keep the original character if it doesn't have a leet equivalent
//       }
//     }
  
//     return translatedString;
//   }
  