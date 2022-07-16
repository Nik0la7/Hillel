let arr = [23,56,4,78,5,63,45,210,56];

let deleteElement = function(delNum) { 
    let modArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== delNum) {
            modArray.push(arr[i]);
        }
    }
    console.log(modArray);
}

deleteElement(210);