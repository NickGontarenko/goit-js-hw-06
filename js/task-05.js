const textInputRef = document.querySelector('#name-input');
const titleNameOutputRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', onСhangeNameOutput);

function onСhangeNameOutput() {
    // Третий вариант*** (я забыл что пустая строка приводится к false)
    titleNameOutputRef.textContent = textInputRef.value || 'Anonymous';
}

// Второй вариант***
// titleNameOutputRef =
// titleNameOutputRef.textContent =
//     event.currentTarget.value !== ''
//         ? event.currentTarget.value
//         : 'Anonymous 🕶';

// Первый вариант***
// if (event.currentTarget.value !== '') {
//     titleNameOutputRef.textContent = event.currentTarget.value;
// } else {
//     titleNameOutputRef.textContent = 'Anonymous 🕶';
// }
