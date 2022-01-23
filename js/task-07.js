const fontSizeControlRef = document.querySelector('#font-size-control');
const textThatResizesRef = document.querySelector('#text');

textThatResizesRef.style.fontSize = `${fontSizeControlRef.value}px`;
fontSizeControlRef.addEventListener('input', onResizesText);

function onResizesText(event) {
    textThatResizesRef.style.fontSize = `${event.currentTarget.value}px`;
}
