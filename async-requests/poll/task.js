'use strict';

const newPoll = new XMLHttpRequest();

newPoll.addEventListener('readystatechange', () => {
    if (newPoll.readyState === newPoll.DONE && newPoll.status === 200) {
        const response = JSON.parse(newPoll.responseText);
        const pollTitle = document.getElementById('poll__title');
        pollTitle.textContent = response.data.title;
        const answers = document.getElementById('poll__answers');

        for (let answer of response.data.answers) {
            const button = `<button class="poll__answer" onclick="alert('Спасибо, ваш голос засчитан!');">${answer}</button>`;
            answers.insertAdjacentHTML('beforeend', button);
        }
    }
})

newPoll.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
newPoll.send();