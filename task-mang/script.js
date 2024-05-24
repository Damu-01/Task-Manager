const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;

    if (title.trim() !== '') {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <h2>Ttitle:-</h2>
            <h3>${title}</h3>
            <h2>Description:-</h2>
            <p>${description}</p>
            <button class="complete-btn">Mark as Completed</button>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(task);
        

        event.target.reset();
    }
});

taskList.addEventListener('click', function(event) {
        event.preventDefault();
    if (event.target.classList.contains('complete-btn')) {
        event.target.closest('.task').classList.toggle('completed');
    } else if (event.target.classList.contains('delete-btn')) {
        event.target.closest('.task').remove();
    }
});
