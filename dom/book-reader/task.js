'use strict'

const book = document.querySelector('.book');
const bookControls = document.querySelector('.book__controls');
const fontSizes = document.querySelectorAll('.font-size');

function changeFont(event) {
    event.preventDefault();
    if (event.target.dataset.size === 'small') {
        book.classList.remove('font-size_big');
        book.classList.add('font-size_small');
    } else if (event.target.dataset.size === 'big') {
        book.classList.remove('font-size_small');
        book.classList.add('font-size_big');
    } else {
        book.classList.remove('font-size_big');
        book.classList.remove('font-size_small');
    }
}

for (let control of bookControls.children) {
    control.addEventListener('click', changeFont);
}

for (let fontSize of fontSizes) {
    fontSize.classList.remove('font-size_active');
}

event.target.classList.add('font-size_active');