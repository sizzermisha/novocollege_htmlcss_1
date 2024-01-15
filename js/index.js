const 
    SelectAddButton = document.getElementById('select-add'),
    SelectSearchButton = document.getElementById('select-search'),
    SearchContainer = document.getElementById('search-container'),
    AddContainer = document.getElementById('add-container'),
    TodoContainer = document.getElementById('todo-container'),
    AddPostInput = document.getElementById('add-post-input'),
    AddPostButton = document.getElementById('add-post-button');

let 
    todoObject = localStorage.getItem('todo') != null ? JSON.parse(localStorage.getItem('todo')) : [];

const LocalCheckStorage = () => {

    if(localStorage.getItem('todo') == '' || !localStorage.getItem('todo') || localStorage.getItem('todo') == []) {
        TodoContainer.innerHTML = `
        <li>
            <p>Записи не найдены</p>
        </li>
        `;
    } else {
        TodoContainer.innerHTML = ``;
        console.log(todoObject);
        todoObject.map((data, i) => { 
            TodoContainer.innerHTML += `<li id="${data.id}">
                <p>${i + 1}</p>
                <p>${data.text}</p>
                ${data.status = 'done' ? "" : `<button id="done-button">Del</button>`}
                <button id="delete-button">Delete Button</button>
            </li>`
        })
    }
}
LocalCheckStorage();

AddPostButton.onclick = () => {
    let todoArray = {
        id: todoObject.length + 1,
        text: AddPostInput.value,
        status: 'active'
    }
    todoObject.push(todoArray);

    localStorage.setItem('todo', JSON.stringify(todoObject));
    LocalCheckStorage();
    AddPostInput.value = '';
};

const
    DeletePostButton = document.getElementById('delete-button');

// DeletePostButton.onclick = () => {
//     DeletePostButton.removeChild();
// }