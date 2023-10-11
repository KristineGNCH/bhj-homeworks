'use strict'

const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.querySelector('.tasks__control');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (taskInput.value.length > 0) {
        tasksList.insertAdjacentHTML('beforeend',
            `<div class="task">
    <div class="task__title">${taskInput.value}</div>
    <a href="#" class="task__remove">&times;</a></div>`
        );
        taskInput.value = '';
    };
})


tasksList.addEventListener('click', (e) => {
    const remove = e.target.matches('.task__remove');
    const task = e.target.closest('.task');

    if (remove) {
        task.remove();
        e.preventDefault();
    }
})
