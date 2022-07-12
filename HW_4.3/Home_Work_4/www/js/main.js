let word = prompt("Enter please your word");
let letter = prompt("Enter please the letter which your word have");

let sameLetter = 0;
let array = word.split('');

for (let i = 0; i < array.length; i++) {
    if (array[i] === letter) {
        sameLetter += 1;
    }
}

console.log(`The string contains the following number of "${letter}": ${sameLetter}`); 