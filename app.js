document.addEventListener('DOMContentLoaded', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('name');
    const phone = document.getElementById('phone');
    const eye = document.getElementById('eye');
    const createAccountBtn = document.getElementById('create-Account');
    const signBtn = document.getElementById('submit');
  
    createAccountBtn?.addEventListener('click', () => {
      const nameValue = username.value;
      const phoneValue = phone.value;
      const emailValue = email.value;
      const passwordValue = password.value;
      if (nameValue === '' || passwordValue === '') {
        alert('Please fill all fields correctly to sign up');
      } else {
        localStorage.setItem('name', nameValue);
        localStorage.setItem('phone', phoneValue);
        localStorage.setItem('email', emailValue);
        localStorage.setItem('password', passwordValue);
        alert('Your account has been created');
        window.location.href = 'index.html';
      }
    });
  
    eye?.addEventListener('click', () => {
      if (password.type === 'password') {
        password.type = 'text';
      } else {
        password.type = 'password';
      }
    });
  
    signBtn?.addEventListener('click', signUp);
  
    function signUp() {
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');
      const storedName = localStorage.getItem('name');
      const emailValue = email.value;
      const passwordValue = password.value;
  
      if (storedEmail === emailValue && storedPassword === passwordValue) {
        alert(`Thanks for logging in ${storedName}`);
      } else {
        alert('Invalid Email or Password');
      }
    }
  });
  