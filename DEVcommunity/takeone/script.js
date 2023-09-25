// Get a reference to the form, input field, and task list
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the task content from the input field
    const taskContent = taskInput.value;

    // Make sure the task content is not empty
    if (taskContent.trim()) {
        // Create a new list item with the task content
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item', 'flex', 'justify-between', 'p-2', 'rounded-lg', 'shadow-lg', 'bg-white', 'my-2');
        taskItem.innerHTML = `
            <span class="flex-1 ml-2 text-gray-800">${taskContent}</span>
            <button class="edit-btn p-1 rounded-full bg-gray-300 mr-2"><i class="fas fa-edit"></i></button>
            <button class="delete-btn p-1 rounded-full bg-red-500"><i class="fas fa-trash-alt"></i></button>
        `;

        // Add the new task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskForm.reset();

        // Add event listeners for the edit and delete buttons within the new list item
        const editButton = taskItem.querySelector('.edit-btn');
        const deleteButton = taskItem.querySelector('.delete-btn');

        // Edit a task when the edit button is clicked
        editButton.addEventListener('click', function() {
            const taskText = taskItem.querySelector('span').textContent;
            const inputField = document.createElement('input');
            inputField.classList.add('w-full', 'p-2', 'rounded-lg', 'shadow-lg');
            inputField.value = taskText;

            // Replace the task text with the input field
            taskItem.innerHTML = '';
            taskItem.appendChild(inputField);

            // Create and append save and cancel buttons for editing
            const saveButton = document.createElement('button');
            saveButton.classList.add('update-btn', 'p-1', 'rounded-full', 'bg-blue-500', 'text-white', 'mr-2');
            saveButton.innerHTML = '<i class="fas fa-check"></i>';
            taskItem.appendChild(saveButton);

            const cancelButton = document.createElement('button');
            cancelButton.classList.add('cancel-btn', 'p-1', 'rounded-full', 'bg-red-500');
            cancelButton.innerHTML = '<i class="fas fa-times"></i>';
            taskItem.appendChild(cancelButton);

            // Handle save and cancel button clicks
            saveButton.addEventListener('click', function() {
                const updatedText = inputField.value.trim();
                if (updatedText) {
                    taskItem.innerHTML = `
                        <span class="flex-1 ml-2 text-gray-800">${updatedText}</span>
                        <button class="edit-btn p-1 rounded-full bg-gray-300 mr-2"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn p-1 rounded-full bg-red-500"><i class="fas fa-trash-alt"></i></button>
                    `;
                }
            });

            cancelButton.addEventListener('click', function() {
                taskItem.innerHTML = `
                    <span class="flex-1 ml-2 text-gray-800">${taskText}</span>
                    <button class="edit-btn p-1 rounded-full bg-gray-300 mr-2"><i class="fas fa-edit"></i></button>
<button class="delete-btn p-1 rounded-full bg-red-500"><i class="fas fa-trash-alt"></i></button>

                `;
            });
        });

        // Delete a task when the delete button is clicked
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    }
});
