let arr1 = [5,12,7,34,2,35,43,13,77,56,35];
let arr2 = [4,8,45,3,12,22,1,24];

let bigArray = arr1.length >= arr2.length;
let sumArr = [];

if (bigArray) {
    for (let i = 0; i < arr1.length; i++) {
        let checkSumm = arr1[i] * arr2[i];
        if (isNaN(checkSumm)) {  
            sumArr.push(arr1[i]);
        } else {
            sumArr.push(checkSumm);
        }
    }  
} else  {
    for (let i = 0; i < arr2.length; i++) {
        let checkSumm = arr2[i] * arr1[i]; 
        if (isNaN(checkSumm)) {  
            sumArr.push(arr2[i]);
        } else {
            sumArr.push(checkSumm);
        }
    } 
} 
console.log(sumArr);