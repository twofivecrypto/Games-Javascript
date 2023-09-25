// Select elements from the DOM
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event listener to add a task
todoForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the task text
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new task element
        const taskElement = document.createElement('li');
        taskElement.className = 'flex items-center justify-between bg-white px-3 py-2 rounded';

        // Add task text
        taskElement.textContent = taskText;

        // Create buttons for completing and deleting tasks
        const completeButton = document.createElement('button');
        completeButton.className = 'text-green-500 hover:text-green-600';
        completeButton.textContent = 'Complete';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'text-red-500 hover:text-red-600';
        deleteButton.textContent = 'Delete';

        // Add event listeners to buttons
        completeButton.addEventListener('click', function () {
            taskElement.classList.toggle('line-through');
        });

        deleteButton.addEventListener('click', function () {
            taskElement.remove();
        });

        // Append buttons to the task element
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);

        // Append the task element to the task list
        taskList.appendChild(taskElement);

        // Clear the input field
        taskInput.value = '';
    }
});
