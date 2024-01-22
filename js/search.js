const searchInput = document.getElementById('search-input');
const toDoList = document.querySelectorAll('#todo-container', "li");

searchInput.oninput = () => {
    let searchArr = [];
    todoObject.map(data => {
        console.log(searchInput.value)
        if(data.text.includes(searchInput.value)) {
            searchArr.push(data);
        }
    })

    TodoContainer.innerHTML = ``;
    searchArr.map((data, i) => {
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