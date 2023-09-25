// Select elements
const addTaskInput = document.getElementById('add-task');
const editTaskInput = document.getElementById('edit-task');
const addButton = document.getElementById('add');
const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');
const taskList = document.getElementById('task-list');

// Function to create a new task item
function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="text-red-500 ml-2">Delete</button>
    `;

    // Add a click event to delete tasks
    taskItem.querySelector('button').addEventListener('click', () => {
        taskItem.remove();
    });

    return taskItem;
}

// Add task to the list
function addTask() {
    const taskText = addTaskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        addTaskInput.value = '';
    }
}

// Edit task
function editTask() {
    const taskText = editTaskInput.value.trim();
    if (taskText !== '') {
        const selectedTask = document.querySelector('li.selected');
        if (selectedTask) {
            selectedTask.querySelector('span').textContent = taskText;
            editTaskInput.value = '';
            selectedTask.classList.remove('selected');
        }
    }
}

// Add task when the "Add" button is clicked
addButton.addEventListener('click', addTask);

// Edit task when the "Edit" button is clicked
editButton.addEventListener('click', editTask);

// Add task when Enter key is pressed (for both Add and Edit)
addTaskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

editTaskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        editTask();
    }
});

// Select task for editing
taskList.addEventListener('click', (event) => {
    const listItem = event.target.closest('li');
    if (listItem) {
        const selected = document.querySelector('li.selected');
        if (selected) {
            selected.classList.remove('selected');
        }
        listItem.classList.add('selected');
        editTaskInput.value = listItem.querySelector('span').textContent;
    }
});

// Delete selected task
deleteButton.addEventListener('click', () => {
    const selected = document.querySelector('li.selected');
    if (selected) {
        selected.remove();
        editTaskInput.value = '';
    }
});
