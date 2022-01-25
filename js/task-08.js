const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const message = 'Предупреждение !!!! Все поля должны быть заполнены';

    if (email === '' || password === '') {
        return alert(message); // <----- Всё оказолось куда проще )
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);
    event.currentTarget.reset();
}
