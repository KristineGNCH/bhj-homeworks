'use strict';

const textArr = Array.from(document.querySelectorAll('.reveal'));

addEventListener('scroll', () => {
    for (let i = 0; i < textArr.length; i++) {
        const {
            top,
            bottom
        } = textArr[i].getBoundingClientRect();


        console.log({ top, bottom });


        if ((bottom > 0) && (top < window.innerHeight)) {
            textArr[i].classList.add('reveal_active');
        } else {
            textArr[i].classList.remove('reveal_active');
        }
    }
})


console.log(window.innerHeight);