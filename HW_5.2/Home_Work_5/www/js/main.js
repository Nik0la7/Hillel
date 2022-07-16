function findPolindrom() {
    let askWord = prompt("Enter your word");
    wordArr = [...askWord];
    poliWord = [...askWord].reverse();
    let resultWord;
    for (let i = 0; i < wordArr.length; i++) {
        resultWord = wordArr[i] === poliWord[i] ? true : false;
    }
    console.log(resultWord);
}
findPolindrom();