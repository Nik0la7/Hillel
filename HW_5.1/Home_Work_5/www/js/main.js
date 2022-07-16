let bigArray = [[1,2,3], [4,5,6], [7,8,9]];

function result() {
    bigArray = [].concat(bigArray[0],bigArray[1],bigArray[2]);
    console.log(bigArray);
};
result();