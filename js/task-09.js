function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValueRef = document.querySelector('.color');
const changeColorBtnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');

changeColorBtnRef.addEventListener('click', onChangeColorBody);

function onChangeColorBody() {
    colorValueRef.textContent = getRandomHexColor();
    bodyRef.style.backgroundColor = getRandomHexColor();
};
