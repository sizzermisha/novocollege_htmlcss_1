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
        todoObject.map((data, i) => { 
            TodoContainer.innerHTML += `<li id="${data.id}">
                <p>${i + 1}</p>
                <p ${data.status == 'done' ? "style=\"color: green\"" : ""}>${data.text}
                ${data.status == 'done' ? "" : 
                    `<button class="done-button" id="${data.id}">DONE</button>
                `}
                <button class="delete-button" id="${data.id}">Delete Button</button>
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

document.addEventListener('click', function(e) {
    if(e.target.className == "delete-button") {
        const idToDelete = e.target.id;
        let deleteArr = [];

        todoObject.map(data => {
            if(data.id != idToDelete) {
                deleteArr.push(data);
            }
        })

        todoObject = deleteArr;
        localStorage.setItem('todo', JSON.stringify(todoObject));
        LocalCheckStorage();
    }

    if(e.target.className == "done-button") {
        const idToDone = e.target.id;

        let doneArr = [];
        todoObject.map(data => {
            if(data.id == idToDone) {
                data.status = "done";
            }
            doneArr.push(data);
        })

        todoObject = doneArr;
        localStorage.setItem('todo', JSON.stringify(todoObject));
        LocalCheckStorage();
    }


})