const input = document.querySelectorAll('.input');
let btn = document.querySelectorAll('.btn');
let clearBtn = document.querySelectorAll('.clearBtn');

btn.forEach((element) => {
    element.addEventListener('click', function (event) {
        if (event.target.dataset) {
            getResult(event.target.dataset.action);
        } else {
            return;
        };
    });
});
clearBtn.forEach((element) => {
    element.addEventListener('click', function (event) {
        if (event.target === element) {
            let getElement = element.closest('.task');
            let getItem = getElement.querySelector('.result');
            getItem.innerHTML = ``;
        } else {
            return;
        };
    });
});
function getResult (func) {
    input.forEach((element) => {
        if (element.value !== "") {
            let findBlock = element.closest('.task');
            let findElement = findBlock.querySelector('.result');
            findElement.innerHTML = `${element.value}`;
            switch(func){
                case 'upperCase': {
                    upperCase(element.value, findElement);
                    break;
                };
                case 'date': {
                    date(element.value, findElement);
                    break;
                };
                case 'trimm': {
                    trimm(element.value, findElement);
                    break;
                };
                case 'numberVowels': {
                    numberVowels(element.value, findElement);
                    break;
                };
                case 'postIndex': {
                    postIndex(element.value, findElement);
                    break;
                };
            };
            element.value = '';
        };
    });
};
function upperCase (value, block) {
    let result = value.match(/([A-Z])/);
    if (result !== null) {
        block.innerHTML = `Your entered strings of " ${value} " has first character is uppercase`;
    } else {
        block.innerHTML = `Your entered strings of " ${value} " first character is not uppercase`;
    };
};
function date (value, block) {
    let result = value.match(/^(3[0-1]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/[0-9]{4}$/g);
    result ? block.innerHTML = `Your entered date "${value}" is correct.` :
    block.innerHTML = `Your entered date "${value}" is Not correct.` ;
};
function trimm (value) {
    let result;
    result = value.replaceAll(/\s/g, ""); 
};
function numberVowels (value, block) {
    let counterVowels = 0;
    let parametr = value.split("");
    parametr.forEach((letter) => {
        let result;
        result = letter.match(/([a,e,i,o,u,A,E,I,O,U])/); 
        if(result != null){
            counterVowels++;
        };
    });
    block.innerHTML = `Your entered strings of " ${value} " has ${counterVowels} vawels letter`;
};
function postIndex (value, block) {
    let result = value.match(/\d{5}[-]\d{4}/g);
    result ? block.innerHTML = `Your USA zip code "${value}" is true.`:
    block.innerHTML = `Your USA zip code "${value}" is false.` ;
};