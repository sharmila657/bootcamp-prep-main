let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(char) {
    let newChar = {}
    let value = ""
    char = char.toLowerCase()
    for (let i = 0; i < letters.length; i++){
       newChar[letters[i]]= leetChars[i]
        }
    for (let j = 0; j < char.length; j++){
        let s = newChar[char[j]];
        value = value + s
    }
    return value;
    

}
// // console.log(leetTranslator("Sharmila"))



console.log(leetTranslator('Fullstack'))































