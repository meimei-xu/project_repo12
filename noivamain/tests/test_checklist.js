// Accessing all the necessary elements from HTML document and assigning them to a variable
const dateElement = document.getElementById('date');
const clear = document.querySelector('.clear');
const list = document.getElementById('list');
const input = document.querySelector('input');
const addButton = document.querySelector('.fa-plus-circle');
const show_all = document.querySelector('.All');
const show_finished = document.querySelector('.fulfill');
const show_unfinished = document.querySelector('.unfinished');

// Assigning checkbox elements to a constant value
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
const CHANGE = "editable";

var status = "all", timer = null, delay = 260, click = 0; //double click

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Show time 
const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Storing user's to-do items
let LIST, id;
let data = localStorage.getItem("TODO");

//get historical data from localstorage
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}
else {
    LIST = []
    id = 0;
}

function loadList(array) {
    array.forEach(element => {
        add_to_do(element.name, element.id, element.done, element.trash);
    });
}

function add_to_do(toDo, id, done, trash) {
    if (trash)
        return;
    // If "done" is set to true, "DONE" is assigned to value of "CHECK", if set to false, it is assigned value of "UNCHECK"
    const DONE = done ? CHECK : UNCHECK;

    // If "done" is set to true, "LINE" is assigned to value of "LINE_THROUGH", if set to false, it is assigned an empty string
    const LINE = done ? LINE_THROUGH : "";

    // Format of each to-do item
    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <input disabled="disabled" class="text ${LINE}" job="edit" value="${toDo}" id="${id}" ">
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>
                `;
    // Positions each to-do item one after the other
    const position = "beforeend";
    list.insertAdjacentHTML(position, item); //可以使用appendchild直接插入dom，效率会更高
}

function defReload(array, status){
    if(status === "all"){
        array.forEach(element=>{
            add_to_do(element.name, element.id, element.done, element.trash)
        });
    }
    else if(status === "completed"){
        array.forEach(element => {
            if (element.done) {
                add_to_do(element.name, element.id, element.done, element.trash);
            }
        });
    }
    else{
        array.forEach(element => {
            if (!element.done) {
                add_to_do(element.name, element.id, element.done, element.trash);
            }
        });
    }
}

show_all.addEventListener("click", function () {
    var i, list_length = list.childNodes.length;
    status = "all";
    for (i = 0; i < list_length; i++) {
        list.removeChild(list.lastChild);
    }
    defReload(LIST,"all");
});

show_finished.addEventListener("click", function () {
    var i, list_length = list.childNodes.length;
    status = "completed";
    for (i = 0; i < list_length; i++) {
        list.removeChild(list.lastChild);
    }
    defReload(LIST,"completed");
});

show_unfinished.addEventListener("click", function () {
    var i, list_length = list.childNodes.length;
    status = "active";
    for (i = 0; i < list_length; i++) {
        list.removeChild(list.lastChild);
    }
    defReload(LIST,"active");
});

input.addEventListener("keypress", function (even) {
    // Checks if user pressed "enter" key
    if (event.keyCode === 13) {
        const toDo = input.value;
        // Checks if user's to-do item is empty or not
        if (toDo) {
            add_to_do(toDo, id, false, false);

            // If user's to-do item is not empty, it pushes the value they entered to the to-do list
            LIST.push({ name: toDo, id: id, done: false, trash: false }); // By default "done" and "trash" are set to false

            // Stores user's to-do item in their local storage
            localStorage.setItem("TODO", JSON.stringify(LIST));

            // Increments to-do item ID by 1 every time user adds a one
            id++;

            // Clears the text user inputted in add-to-do place holder when user adds a to-do item
            input.value = "";
        }
    }
});

addButton.addEventListener('click', function () {
    const toDo = input.value;
    if (toDo) {
        add_to_do(toDo, id, false, false);

        LIST.push({ name: toDo, id: id, done: false, trash: false });

        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
        input.value = "";
    }
});

list.addEventListener("click", function (event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if (elementJob === 'complete') {
        completeToDo(element);
    } else if (elementJob === 'delete') {
        removeToDo(element);
    }
    else if (elementJob === 'edit') {
        editTodo(element);
    }

    localStorage.setItem("TODO", JSON.stringify(LIST));

}, false);

function completeToDo(element) {
    // If UNCHECK is in the classlist, it will remove it and add CHECK to classlist and vice versa
    element.classList.toggle(UNCHECK);
    element.classList.toggle(CHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
    if(status === "active" && LIST[element.id].done){
        element.parentNode.parentNode.removeChild(element.parentNode);
    }
    else if(status === "completed" && !LIST[element.id].done){
        element.parentNode.parentNode.removeChild(element.parentNode);
    }
    else if(LIST[element.id].done){
        var temp = element.parentNode, realParent = element.parentNode.parentNode;
        element.parentNode.parentNode.removeChild(element.parentNode);
        realParent.appendChild(temp);
    }
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

function editTodo(element) {
    var newTodo, content = element.parentNode.querySelector(".text"), preText;
    click++;
    if (click === 1) {
        timer = setTimeout(function () {
            click = 0;
        }, (delay));
    } else {
        click = 0;
        clearTimeout(timer);
        preText = content.value;
        content.disabled = false;
        content.focus();
        content.onblur = () => {
            newTodo = content.value;
            if (preText !== newTodo) {
                LIST[element.id].name = newTodo;
                localStorage.setItem("TODO", JSON.stringify(LIST));
            }
            content.disabled = true;
        };
    }

}