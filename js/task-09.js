const colorValueRef = document.querySelector('.color');
const changeColorBtnRef = document.querySelector('.change-color');

changeColorBtnRef.addEventListener('click', onChangeColorBody);

function onChangeColorBody() {
    const randomColor = getRandomHexColor();
    colorValueRef.textContent = randomColor;
    document.body.style.backgroundColor = colorValueRef.textContent;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
