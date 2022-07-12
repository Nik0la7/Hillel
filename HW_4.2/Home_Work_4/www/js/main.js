let array = [5,3,7,8,1,5,9,5,4,1,8,2];

let repeatNumbers = new Array();

for (let i = 0; i < array.length; i++) {
    for (let n = i + 1; n < array.length; n++) {
        if (array[n] === array[i]) {
            if (repeatNumbers.indexOf(array[n]) == -1){
                repeatNumbers.push(array[n]);
            }
        }
    }
}

console.log(repeatNumbers);































// for (let i = 0; i < array.length; i++) {
//     for (let n = 0; n < i; n++){
//         if (repeatNumbers[i] === array[i]) {
//             break;
//         } else if (array[n] === array[n]) {
//             repeatNumbers.push(array[n]);
//             // console.log(repeatNumbers)
//         }
//     }
// }