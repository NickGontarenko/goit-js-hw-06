const textInputRef = document.querySelector('#name-input');
const titleNameOutputRef = document.querySelector('#name-output');
const NAME = 'Anonymous 🕶';
textInputRef.addEventListener('input', onchangeNameOutput);

function onchangeNameOutput(event) {
    titleNameOutputRef.textContent =
        event.currentTarget.value !== '' ? event.currentTarget.value : NAME;

    // if (event.currentTarget.value !== '') {
    //     titleNameOutputRef.textContent = event.currentTarget.value;
    // } else {
    //     titleNameOutputRef.textContent = ;
    // }
}
