document.addEventListener('DOMContentLoaded', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('name');
    const phone = document.getElementById('phone');
    const eye = document.getElementById('eye');
    const createAccountBtn = document.getElementById('create-Account');
    const signBtn = document.getElementById('submit');
    let dashboard = document.getElementById('dashBoard')
    console.log(dashboard);


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

    signBtn?.addEventListener('click', () => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const storedName = localStorage.getItem('name');
        const emailValue = email.value;
        const passwordValue = password.value;

        if (storedEmail === emailValue && storedPassword === passwordValue) {
          alert(`Thanks for logging in ${storedName}`);
          window.open('dashboard.html')
          dashboard.innerHTML = `
            <header class="header">
              <div class="logo">Your Logo</div>
              <div class="user-navigation">
                <span class="username">${storedName}</span>
              </div>
            </header>
            <nav class="sidebar">
              <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Analytics</a></li>
              </ul>
            </nav>
            <main class="content">
              <h1>Welcome, ${storedName}</h1>
              <div class="widgets">
                <div class="widget">
                  <h2>Recent Activity</h2>
                  <ul>
                    <li>New user registered</li>
                    <li>Order placed</li>
                    <li>Comment posted</li>
                  </ul>
                </div>
                <div class="widget">
                  <h2>Sales Performance</h2>
                  <p>This month's sales: $10,000</p>
                </div>
              </div>
            </main>
          `;
        } else {
          alert('Invalid Email or Password');
        }
      });
    });
const pageChange = document.getElementById('create-page')
pageChange.addEventListener('click', () => {
    window.open('create.html')
})