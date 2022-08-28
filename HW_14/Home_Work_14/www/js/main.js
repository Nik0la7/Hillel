const sendBtn = document.getElementById('SendBtn');
const randomBtn = document.getElementById('RandomBtn');
const select = document.getElementById('num');
const otherInput = document.querySelector('.other_input');
const dateInput = document.querySelector('.date_input');
const textBlock = document.querySelector('.block_info');
let xhr =  new XMLHttpRequest ();
let sendNum;

sendBtn.addEventListener("click", send);
randomBtn.addEventListener("click", random);
select.addEventListener("change", valueOfSelect);

function getInputNum(event) {
    if ("1234567890".indexOf(event.key) != -1 !== true) {
      event.preventDefault();
    };
};

function valueOfSelect() {
    if (select.value === "date") {
        otherInput.classList.add('hide_input');
        dateInput.classList.remove('hide_input');
    } else {
        otherInput.classList.remove('hide_input');
        dateInput.classList.add('hide_input');
    };
};

function send () {
    textBlock.innerHTML = `<p>${""}</p>`;
    if (select.value === "date") {
        sendNum = dateInput.value.replaceAll('-', '/').slice(5);
    } else if (otherInput.value !== ""){
        sendNum = Number(otherInput.value);
    } else {
        return
    };
    (async () => {
    let url = `http://numbersapi.com/${sendNum}/${select.value}`;
    let response = await fetch(url);
    let message = await response.text();
        textBlock.innerHTML = `<p>${message}</p>`;
    })();
};

function random () {
    const randomValue = Math.floor(Math.random() * (0 - 9999 + 1)) + 9999;
    (async () => {
        let url = `http://numbersapi.com/${randomValue}/${select.value}`;
        let response = await fetch(url);
        let message = await response.text(); 
        textBlock.innerHTML = `<p>${message}</p>`;
    })();
};