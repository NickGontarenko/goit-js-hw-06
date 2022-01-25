const validationInputRef = document.querySelector('#validation-input');
const dataValue = validationInputRef.dataset.length;

validationInputRef.addEventListener('blur', onCharacterСountСheck);

function onCharacterСountСheck(event) {
    const currentNumber = event.currentTarget.value.length;

    validationInputRef.classList.remove('invalid', 'valid');

    if (currentNumber == dataValue) {
        validationInputRef.classList.add('valid');
    } else {
        validationInputRef.classList.add('invalid');
    }
}
