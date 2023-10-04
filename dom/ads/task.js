'use strict';

const rotator = document.querySelectorAll('.rotator__case');
let countCase = 0;


function changeRotator() {
    for (i = 0; i < rotator.length; i++) {
        rotator[i].classList.remove('rotator__case_active');
        rotator[i].style.color = rotator[i].dataset.color;
    }
    rotator[countCase].classList.add('rotator__case_active');
    if (countCase == rotator.length - 1) {
        countCase = 0;
    } else {
        countCase++
    }
}

setInterval(changeRotator, 1000);



