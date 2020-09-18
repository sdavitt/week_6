/* var cardTitle = document.querySelectorAll('.card-title');
console.log(cardTitle); */

var cardTitle_querySelector = document.querySelector('.card-title');
// console.log(cardTitle_querySelector)

cardTitle_querySelector.style.fontSize = '43px';

var addTodoButton = document.querySelector('button.add');
// console.log(addTodoButton)
var errorDanger = document.querySelector('#alert-custom');
var errorText = document.querySelector('#alert-text');

// DOM EVENTS
var btnAddTodo = document.querySelector('#btn-add-todo');
btnAddTodo.addEventListener('click', function () {
    addTodo();
});

document.querySelector('#todo-item-text').addEventListener('keydown', function (event) {
    if (event.which == 13) {
        addTodo();
    }
});

var todoItemsUL = document.querySelector('#todoItems');
function handleRemove() {
    // When I click on the x-icon for that element
    var removeIcons = document.querySelectorAll('.remove');
    for (var i in removeIcons) {
        if (removeIcons.hasOwnProperty(i)) {
            var element = removeIcons[i];
            element.addEventListener('click', function (event) {
                // Remove the List Node from the UnorderedList Node
                todoItemsUL.removeChild(this.parentElement)
            })
        }
    }
}

function addTodo() {
    var todoItemsUL = document.querySelector('#todoItems');
    var todoItems = document.querySelectorAll('.todo-item');

    if (document.querySelector('#todo-item-text').value) {
        var li_tag = document.createElement('li');
        li_tag.setAttribute('class', 'todo-item');
        var todoInputField = document.querySelector('#todo-item-text').value;
        li_tag.innerHTML = `<div class="form-check"> 
                                <label class="form-check-label"> 
                                    <input class="checkbox" type="checkbox" /> ${todoInputField}
                                </label> 
                            </div> 
                            <i onclick="handleRemove()" class="remove mdi mdi-close-circle-outline"></i>`

        todoItemsUL.appendChild(li_tag);

        errorDanger.style.display = 'none';
        document.querySelector('#todo-item-text').value = '';

    } else {
        if (todoItems.length < 1) {
            console.log("Validation")
            showValidationError();
        } else {
            console.log("Empty")
            showEmptyError();
        }
    }
}

function showValidationError() {

    errorDanger.style.display = 'block';
    errorText.innerHTML = 'You have no TODO items';
}

function showEmptyError() {
    errorDanger.style.display = 'block';
    errorText.innerHTML = 'You must type something in';
}
