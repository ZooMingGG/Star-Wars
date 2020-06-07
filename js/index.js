"use strict";
const body = document.querySelector('body');

let current = 1;

const timerId = setInterval( () => {
    if (current % 2 === 0) {
        body.classList.add('second-background');
    } else {
        body.classList.remove('second-background');
    }

    current++;
}, 15000);
