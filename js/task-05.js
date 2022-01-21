const textInputRef = document.querySelector('#name-input');
const titleNameOutputRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', changeNameOutput);

function changeNameOutput(event) {
  if (event.currentTarget.value !== '') {
    titleNameOutputRef.textContent = event.currentTarget.value;
  } else {
    titleNameOutputRef.textContent = 'Anonymous 🕶';
  }
}
