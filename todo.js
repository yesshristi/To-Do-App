let todoList = [
    {item : 'JS Practice', 
     dueDate : '10/08/24'},
    
];
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    todoList.push({item : todoItem, dueDate : tododate});

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-content');

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++){
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        let {item, dueDate} = todoList[i];
        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
        `;
        
    }
    containerElement.innerHTML = newHtml;
    
}