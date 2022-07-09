let userNumber = parseInt(prompt("Enter the number please!"));

let a = 0, b = 1, result;
let output = " ";

for (let i = 0; i < userNumber; i++) {
    output += a + ",";
    result = a + b;
    a = b;
    b = result;
}

console.log(output.slice(0, -1));