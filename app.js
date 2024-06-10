document.addEventListener('DOMContentLoaded', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('name');
    const phone = document.getElementById('phone');
    const eye = document.getElementById('eye');
    const createAccountBtn = document.getElementById('create-Account');
    const page = document.getElementById('create-page')
    const signButton = document.getElementById('submit')


//Create Functionality Added
    createAccountBtn.addEventListener('click', () => {
        const nameValue = username.value;
        const phoneValue = phone.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        if (nameValue.value == '' || password.value == '') {
            alert('Please fill all feilds correctly to sign up')
        } else {
            localStorage.setItem('name', nameValue);
            localStorage.setItem('phone', phoneValue);
            localStorage.setItem('email', emailValue);
            localStorage.setItem('password', passwordValue);
            alert('Your account has been created')
            window.location.href = 'index.html'

        }

    });

});

eye.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});
//Signup functionality

function pageChange() {
    window.location.href = 'create.html'
}

