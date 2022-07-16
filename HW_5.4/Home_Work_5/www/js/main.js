function randomNum(num1, num2) {
    num2 = Math.ceil(num2);
    num1 = Math.floor(num1);
    return Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
  }
console.log(randomNum(10, 35));