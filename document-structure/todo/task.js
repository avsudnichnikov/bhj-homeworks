const taskInput = document.querySelector('#task__input');
const taskAddButton = document.querySelector('#tasks__add');
const taskList = document.querySelector('#tasks__list');

const getStorageTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

const setStorageTasks = (tasks) => {
    return localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addStorageTask = (task) => {
    const tasks = getStorageTasks();
    tasks.push(task);
    return setStorageTasks(tasks);
}

const removeStorageTask = (index) => {
    const tasks = getStorageTasks();
    tasks.splice(index, 1);
    return setStorageTasks(tasks);
}

const getTasks = () => {
    getStorageTasks().forEach((task) => {
        taskList.innerHTML += decorateTaskText(task)
    });
}

const addTask = () => {
    const task = taskInput.value;
    if (task !== '') {
        taskInput.value = '';
        addStorageTask(task);
        taskList.innerHTML += decorateTaskText(task);
    } else {
        alert('Вы ничего не написали');
    }
}

const removeTask = (task) => {
    const index = Array.from(taskList.querySelectorAll('.task')).indexOf(task);
    removeStorageTask(index);
    task.remove();
}

const decorateTaskText = (taskText) => {
    return `
          <div class="task">
            <div class="task__title">
              ${taskText}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`;
}

window.addEventListener('load', getTasks);

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

taskAddButton.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.preventDefault();
        removeTask(event.target.closest('.task'));
    }
});
