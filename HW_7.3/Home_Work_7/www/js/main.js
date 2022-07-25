guessingGame = (times) => {
    let timesOfGame = 0;
    let randomNum = Math.floor(Math.random() * (0 - 10 + 1)) + 10;
    let rightNumber = 0;
    
    game = (userNum) => {
        userNum = +prompt("Enter your number").trim();
        isNaN(userNum) ? game() : userNum;
        if (timesOfGame < times) {
            if (randomNum < userNum) {
                rightNumber === 0 ? console.log("Your guess is too high!") : console.log("You know the answer. What do you want from me?");
                timesOfGame ++;
                // console.log(randomNum);
                game(userNum);
            } else if (randomNum > userNum) {
                rightNumber === 0 ? console.log("Your guess is too low!") : console.log("You know the answer. What do you want from me?");
                timesOfGame ++;
                // console.log(randomNum);
                game(userNum);
            } else if (randomNum == userNum) {
                rightNumber === 0 ? console.log("Your got it") : console.log("You know the answer. What do you want from me?");
                timesOfGame ++;
                rightNumber = 1;
                // console.log(randomNum);
                game(userNum);
            };
        } else {
            console.log(`No more guesses the answer was ${randomNum}! Please start a new game`);
            confirm("Do you want to restart game?") ? guessingGame(3) : alert("Goodbye");
        };
    };
    game();
};
confirm("Do you want to start game?") ? guessingGame(3) : alert("Goodbye");