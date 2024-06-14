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

//Password Show Hide functionality here



//create Account Funtionality
function createAccount() {
  if (username.value == "" || password.value == "" || phone.value == "") {
    alert("Please fill all to  create an Account");
    localStorage.setItem("user name", false);
    localStorage.setItem("user email", false);
    localStorage.setItem("user password", false);
    localStorage.setItem("user phone number", false);
  } else {
    alert("Account Created");
    localStorage.setItem("user name", username.value);
    localStorage.setItem("user email", email.value);
    localStorage.setItem("user password", password.value);
    localStorage.setItem("user phone number", phone.value);
    window.location.href = "index.html";
  }
}
