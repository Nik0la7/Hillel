function num(...arg) {
    let summNum = 0;
    for (let i = 0; i < arg.length; i++){
        summNum += arg[i];
    }
    return summNum;
};
console.log(num(2,4,5));
console.log(num(10,45,34,130));