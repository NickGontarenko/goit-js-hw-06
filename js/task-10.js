const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes() {
    const boxes = [];
    let sizeBox = 30;

    for (let i = 1; i <= inputRef.value; i += 1) {
        const divBox = document.createElement('div');
        let colorBoxRef = getRandomHexColor();

        divBox.style.height = sizeBox + 'px';
        divBox.style.width = sizeBox + 'px';
        divBox.style.backgroundColor = colorBoxRef;
        divBox.textContent = '';
        sizeBox += 10;
        boxes.push(divBox);
    }
    boxesRef.append(...boxes);
    inputRef.value = '';
}

function destroyBoxes() {
    boxesRef.innerHTML = '';
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
