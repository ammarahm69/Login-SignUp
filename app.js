//Index File id
let email = document.getElementById("email");
let password = document.getElementById("password");
//Create File ID GET
let phone = document.getElementById("phone");
let username = document.getElementById("name");
//Button Id get create Account
let createAccBtn = document.getElementById("create-Account");
//Sign Up button id get
let signedUpBtn = document.getElementById("signed-up");

//create Account Funtionality
function createAccount() {
  if (username.value == "" || password.value == "" || phone.value == "") {
    Swal.fire("Please create an account to access dashboard");
    localStorage.setItem("user name", false);
    localStorage.setItem("user email", false);
    localStorage.setItem("user password", false);
    localStorage.setItem("user phone number", false);
  } else {
    Swal.fire("Account created sucessfully");
    localStorage.setItem("user name", username.value);
    localStorage.setItem("user email", email.value);
    localStorage.setItem("user password", password.value);
    localStorage.setItem("user phone number", phone.value);
  
    setInterval(function () {
      window.location.href = "index.html";
    }, 1000);
  }
}
