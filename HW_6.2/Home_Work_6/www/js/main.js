let operator;
let operand1;
let operand2;
checkOperator = () => {
    let getOperator = prompt("Enter operator").trim().toString();
    let trueOperator = ['+', '-', '*', '/'];
    for (let i = 0; i < trueOperator.length; i++) {
        if (trueOperator[i] === getOperator) {
            operator = getOperator;
            return;
        };
    };
    checkOperator();
};
checkOperator();

checkFirstOperand = () => {
    let getOperand1 = +prompt("Enter first operand").trim();
    isNaN(getOperand1) ? checkFirstOperand() : operand1 = getOperand1;
};
checkFirstOperand();

checkSecondOperand = () => {
    let getOperand2 = +prompt("Enter second operand").trim();
    isNaN(getOperand2) ? checkSecondOperand() : operand2 = getOperand2;
};
checkSecondOperand();

summ = (arg1, arg2) => {
    res = eval(arg1 + operator + arg2);
    return res;
}
summ();
console.log(summ(operand1, operand2));