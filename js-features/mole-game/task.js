
let deadCounter = 0;
let lostCounter = 0;
getHole = index => document.getElementById(`hole${index}`);


for (holeIndex = 1; holeIndex < getHoleCount(); holeIndex++) {
    getHole(holeIndex).addEventListener('click', function () {
        if (getHole(holeIndex).classList.contains('hole_has-mole')) {
            deadCounter++;
        } else {
            lostCounter++;
            lostCounter.textContent = lostCounter;
        }
        if (deadCounter === 10) {
            alert('Вы победили!');
            deadCounter.textContent = lostCounter;
            lostCounter.textContent = lostCounter;
        }

        if (deadCounter === 5) {
            alert('Вы проиграли!');
            deadCounter.textContent = lostCounter;
            lostCounter.textContent = lostCounter;
        }
    })
}
