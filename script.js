// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Add task
    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
            newTaskInput.focus();
        }
    });

    // Add task on pressing Enter key
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = newTaskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                newTaskInput.value = '';
                newTaskInput.focus();
            }
        }
    });

    // Function to add a task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
