"use strict";
const body = document.querySelector('body');

let current = 1;

function changeBackground() {
    if (current % 2 === 0) {
        body.classList.remove('first-background');
        body.classList.add('second-background');
    } else {
        body.classList.remove('second-background');
        body.classList.add('first-background');
    }

    current++;
}

changeBackground();

const timerId = setInterval(changeBackground, 15000);
