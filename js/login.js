document.getElementById('login').addEventListener('click', function() {
    const email = document.getElementById('email');
    const inputEmail = email.value;
    const password = document.getElementById('password');
    const inputPassword = password.value;

    if (inputEmail == "me@baperbank.com") {
        if (inputPassword == 1234) {
            window.alert("LogIn Success");
            window.location.href = "banking.html";
        } else {
            document.getElementById('login-error').innerHTML = "Password Wrong!";
        }
    } else {
        document.getElementById('login-error').innerHTML = "Email & User Name Wrong!";
    }
})