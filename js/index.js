"use strict";
const body = document.querySelector('body');
const thirdBackground = document.querySelector('.third-background');
const fourthBackground = document.querySelector('.fourth-background');
const firstVector = document.querySelector('.first-vector');
const secondVector = document.querySelector('.second-vector');


let current = 1;

function changeBackground() {
    if (current === 5) {
        current = 1;
    }

    if (current === 1) {
        body.classList.remove('first-background');
        body.classList.remove('second-background');
        firstVector.classList.remove('visible');
        secondVector.classList.remove('visible');
        thirdBackground.classList.remove('visible');
        fourthBackground.classList.remove('visible');
        body.classList.add('first-background');
    } else if (current === 2) {
        body.classList.remove('first-background');
        body.classList.remove('second-background');
        firstVector.classList.remove('visible');
        secondVector.classList.remove('visible');
        thirdBackground.classList.remove('visible');
        fourthBackground.classList.remove('visible');
        body.classList.add('second-background');
    } else if (current === 3) {
        body.classList.remove('first-background');
        body.classList.remove('second-background');
        firstVector.classList.remove('visible');
        secondVector.classList.remove('visible');
        thirdBackground.classList.remove('visible');
        fourthBackground.classList.remove('visible');
        thirdBackground.classList.add('visible');
        firstVector.classList.add('visible')
    } else if (current === 4) {
        body.classList.remove('first-background');
        body.classList.remove('second-background');
        firstVector.classList.remove('visible');
        secondVector.classList.remove('visible');
        thirdBackground.classList.remove('visible');
        fourthBackground.classList.remove('visible');
        fourthBackground.classList.add('visible');
        secondVector.classList.add('visible')
    }

    current++;
}

changeBackground();

const timerId = setInterval(changeBackground, 10000);
