const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const message = 'Предупреждение !!!! Все поля должны быть заполнены';

    if (email === '' || password === '') {
        alert(message);
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);

    formRef.reset();
}
