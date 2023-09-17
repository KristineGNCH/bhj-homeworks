
let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);


for (holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex);
    hole.addEventListener('click', function () {
        if (hole.classList.contains('hole_has-mole')) {
            deadCounter++;
            deadCounter.textContent = deadCounter;
        } else {
            lostCounter++;
            lostCounter.textContent = lostCounter;
        }
        if (deadCounter === 10) {
            alert('Вы победили!');
            deadCounter = 0;
            lostCounter = 0;
            deadCounter.textContent = lostCounter;
            lostCounter.textContent = lostCounter;
        }
        if (deadCounter === 5) {
            alert('Вы проиграли!');
            deadCounter = 0;
            lostCounter = 0;
            deadCounter.textContent = lostCounter;
            lostCounter.textContent = lostCounter;
        }
    })
}
