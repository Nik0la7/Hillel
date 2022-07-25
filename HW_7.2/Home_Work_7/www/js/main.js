specialMultiply = (...args) => {
  if (args.length > 1) {
    let summ = 0;
    for (let i = 0; i < args.length; i++) {
      if (summ === 0) {
        summ = args[i];
      } else {
        summ = summ * args[i];
      };
    };
    return summ;
  } else {
    return summSecond = (argsN) => {
      return args * argsN;
    };   
  };
};
console.log(specialMultiply(3)(5));
console.log(specialMultiply(5, 5, 5, 5, 5));
console.log(specialMultiply(5));