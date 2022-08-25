let valueFromInput;
const processMenu = document.getElementById("process_menu");
const addMenu = document.getElementById('local_list');
const completeMenu = document.getElementById('comlete_menu')
let idElement;

function getTask () {
    const input = document.querySelector('input').value.trim();
    valueFromInput = input;
    let clearInput = document.getElementsByClassName('add_btn');
    clearInput = document.querySelector('input').value = "";
    clearInput = document.querySelector('input').placeholder = "Enter your task!";
    addedTask();
};

function addedTask () {
    const d = new Date();
    idElement = d.getTime();
    const addItemHTML = `<li data-id="${idElement}"><div class="li_text"><span>${valueFromInput}</span></div><div class="li_buttons">
    <img src="img/del_btn.png" alt="" data-id="${idElement}" class="delete_task" type="button">
    </div>
    </li>`;
    const listItemHTML = `<li data-id="${idElement}"><div class="li_text"><span>${valueFromInput}</span></div><div class="li_buttons">
    <img src="img/check.png" alt="" data-id="${idElement}" class="complete_task" type="button">
    <img src="img/edit.png" alt="" data-id="${idElement}" class="edit_task" type="button">
    <img src="img/del_btn.png" alt="" data-id="${idElement}" class="delete_task" type="button">
    </div>
    </li>`;
    if (!valueFromInput == "") {
        
        addMenu.insertAdjacentHTML('beforeend', addItemHTML);
        processMenu.insertAdjacentHTML('beforeend', listItemHTML);
    };
    listeners(parent);
};

let parent = document.querySelector('.list_body');

function addListener(arr, methodName) {
    arr.forEach(element => {
        if (methodName === 'complete') {
            element.removeEventListener("click", completeTask);
            element.addEventListener('click', completeTask);
        } else if (methodName === 'edit') {
            element.removeEventListener("click", editTask);
            element.addEventListener('click', editTask);
        } else if (methodName === 'delete') {
            element.removeEventListener("click", delTask);
            element.addEventListener('click', delTask);
        };
    });
};
function listeners(parent) {
    if(parent) {
        let completeButtons = parent.querySelectorAll('.complete_task');
        let editButtons = parent.querySelectorAll('.edit_task');
        let deleteButtons = parent.querySelectorAll('.delete_task');

        addListener(completeButtons, 'complete');
        addListener(editButtons, 'edit');
        addListener(deleteButtons, 'delete');
    };
};
function delTask (e) {
    let elem = document.querySelectorAll(`li[data-id="${e.target.dataset.id}"]`);
        elem.forEach((e) => {
            e.remove();
        });
};
function completeTask (e) {
    
    const btn = e.target.closest('li');
    let completeBtn = btn.querySelector('.complete_task');
    let editBtn = btn.querySelector('.edit_task');
    completeBtn.classList.add('hidden');
    editBtn.classList.add('hidden');
    console.log(completeBtn);
        if (!btn) {
          return;
        };
        completeMenu.insertAdjacentElement('beforeend', btn);
};
function editTask (e) {
    let elem = document.querySelectorAll(`li[data-id="${e.target.dataset.id}"] .li_text`);
    const btn = e.target.closest('li');
    const list = btn.querySelector("span");

    list.contentEditable = true;
    list.focus();
    list.onblur = function() {
        let text = this.innerHTML;
        elem.forEach((e) => {
            e.innerHTML = text;
        });
    };
};
