const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onCharacterСountСheck);

function onCharacterСountСheck(event) {
    const currentNumberOfCharacters = event.currentTarget.value.length;

    if (currentNumberOfCharacters >= validationInputRef.dataset.length) {
        validationInputRef.classList.remove('invalid');
        validationInputRef.classList.add('valid');
    } else {
        validationInputRef.classList.remove('valid');
        validationInputRef.classList.add('invalid');
    }
}
