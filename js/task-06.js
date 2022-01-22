const validationInputRef = document.querySelector('#validation-input');
const minimumNumberOfCharacters = validationInputRef.dataset.length;
const classValid = validationInputRef.addEventListener(
    'blur',
    oncharacterСountСheck,
);

function oncharacterСountСheck(event) {
    const currentNumberOfCharacters = event.currentTarget.value.length;

    if (currentNumberOfCharacters >= minimumNumberOfCharacters) {
        validationInputRef.classList.remove('invalid');
        validationInputRef.classList.add('valid');
    } else {
        validationInputRef.classList.remove('valid');
        validationInputRef.classList.add('invalid');
    }
}
