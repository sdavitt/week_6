/* var cardTitle = document.querySelectorAll('.card-title');
console.log(cardTitle); */

var cardTitle_querySelector = document.querySelector('.card-title');
console.log(cardTitle_querySelector)

cardTitle_querySelector.style.fontSize = '43px';

var addTodoButton = document.querySelector('button.add');

function handleClick(event){
    console.log(event);

    var todoItems = document.querySelector('#todoitems');
    var li_tag = document.createElement('li');
    var todoInputField = document.querySelector('#todo-item-text').value;
    li_tag.innerHTML = `<div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> ${todoInputField} <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>`
    todoItems.appendChild(li_tag);
    document.querySelector('#todo-item-text').value = '';

}