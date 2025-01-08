// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', () => {
    const taskValue = taskInput.value.trim(); // Get the input value and trim whitespace

    if (taskValue) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskValue;

        // Create a delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';

        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => {
            li.remove(); // Remove the task item
        });

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});
