findDaysInMonth = (month, year) => {
    const bigMonth = ["january", "march", "may", "july", "august", "october", "december"];
    const smallMonth = ["april", "june", "september", "november"];
    const changedMonth = "february";
    const findSecondMonth = year % 4;
    let days;
    if (`${year}`.length === 4) {
        for (let i = 0; i < bigMonth.length; i++) {
            if (bigMonth[i] === month) {
                return (`The ${month} of ${year} has 31 days.`);
            };
        };
        for (let j = 0; j < smallMonth.length; j++) {
            if (smallMonth[j] === month) {
                return (`The ${month} of ${year} has 30 days.`);
            };
        };
        if (changedMonth === month) {
            findSecondMonth === 0 ? (days = 29):(days = 28); 
            return(`The ${month} of ${year} has ${days} days.`);
        } else {
            return(`invalid ${month} value.`);
        };
    } else {
        return(`invalid ${year} value.`);
    }; 
};
console.log(findDaysInMonth('february', 2020));
console.log(findDaysInMonth('february', 2021));
console.log(findDaysInMonth('june', 2022));
console.log(findDaysInMonth('july', 2000));
console.log(findDaysInMonth('velik', 2022));
console.log(findDaysInMonth('april', 404));