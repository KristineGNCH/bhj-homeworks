let startingTime = 10;

const countdownEl = document.getElementById('timer');

setInterval(timer, 1000);

function timer() {

    let hours = 0;
    let minutes = 0;
    let seconds = startingTime;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;


    if (seconds < 0) {
        clearInterval(setInterval(timer, 1000));
        alert('Вы победили в конкурсе!');
        return;
    }

    if (seconds < 10) seconds = '0' + seconds;

    startingTime--;

    countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
}










