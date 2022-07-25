replicate = (num, t) => {
  
  let currentTimes = 0;
  array = [];
  rec = (number, times) => {
    if (currentTimes < times) {
      array.push(number);
      currentTimes ++;
      rec(number, times);
    }; 
  };
  rec(num, t);
  return array;
};

console.log(replicate(55, -1));
console.log(replicate(5, 5));
console.log(replicate(3, 2));
console.log(replicate(4, 0));