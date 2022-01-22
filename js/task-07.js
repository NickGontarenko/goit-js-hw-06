const fontSizeControl = document.querySelector('#font-size-control');
const textThatResizes = document.querySelector('#text');

fontSizeControl.addEventListener('input', onResizesText);

function onResizesText() {
    textThatResizes.style.fontSize = fontSizeControl.value + 'px';
}
