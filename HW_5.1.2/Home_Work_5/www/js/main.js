modArray = () => {
    let bigArray = [[1,2,3], [4,5,6], [7,8,9], [10,11,12], [15,19,22], [25,26,27]];
    newArray = [];
     for (let i = 0; i < bigArray.length; i++) {
         for (let j = 0; j < bigArray[i].length; j++){
            newArray.push(bigArray[i][j]);
         };
     };
     console.log(newArray);
};
modArray();