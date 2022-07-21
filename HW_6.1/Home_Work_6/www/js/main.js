let enteredYear;
let enteredMonth;
const allMonth = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

checkEnteredYear = () => {
    let year = parseInt(prompt("Enter year")) ;
    if (isNaN(year)) {
        checkEnteredYear();
    } else if (`${year}`.length === 4){
        enteredYear = year;
    } else {
        checkEnteredYear();
    };
};
checkEnteredMonth = () => {
    let month = prompt("Enter month").trim().toLowerCase();
    for (i = 0; i < allMonth.length; i++) {
        if (allMonth[i] === month) {
            enteredMonth = month;
            return;
        };
    };
    checkEnteredMonth();
};
getDaysOfMonthInYear = () => {
    checkEnteredYear();
    checkEnteredMonth();
    const bigMonth = ["january", "march", "may", "july", "august", "october", "december"];
    const changedMonth = "february";
    for (let i = 0; i < bigMonth.length; i++) {
        if (bigMonth[i] === enteredMonth) {
            console.log(`The ${enteredMonth} of ${enteredYear} has 31 days`);
            return;
        };
    };
    if (changedMonth === enteredMonth) {
        enteredYear % 4 === 0 ? console.log(`The ${enteredMonth} of ${enteredYear} has 29 days`) : console.log(`The ${enteredMonth} of ${enteredYear} has 28 days`); 
    } else {
        console.log(`The ${enteredMonth} of ${enteredYear} has 30 days`);
    };
};
getDaysOfMonthInYear();