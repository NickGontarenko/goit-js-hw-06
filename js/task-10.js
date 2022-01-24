const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');
console.dir(inputRef);
console.dir(createBtnRef);
console.dir(destroyBtnRef);
console.dir(boxesRef);

// function createBoxes(amount) {}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
