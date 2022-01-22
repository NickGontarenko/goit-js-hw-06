const textInputRef = document.querySelector('#name-input');
const titleNameOutputRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', onchangeNameOutput);

function onchangeNameOutput(event) {
    if (event.currentTarget.value !== '') {
        titleNameOutputRef.textContent = event.currentTarget.value;
    } else {
        titleNameOutputRef.textContent = 'Anonymous 🕶';
    }
}
