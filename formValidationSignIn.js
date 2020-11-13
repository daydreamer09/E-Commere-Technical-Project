let username = document.getElementById('userName');
let password = document.getElementById('password');
let submitbutton = document.getElementById('submit');

var error_userName = false;
var error_password = false;

let userNameError = document.getElementById('userName-error-message');
let passwordError = document.getElementById('password-error-message');
userNameError.style.display = 'none';
passwordError.style.display = 'none';

const check_userName = () => {
    let pattern = /^[a-zA-z]*$/;
    let userName = userName.value;
    if (pattern.test(userName) && userName !== ''){
        userNameError.style.display = 'none';
        userName.style.borderBottom = '2px solid #34F458';
    }else {
        userNameError.innerHTML = 'should contain only characters';
        userNameError.style.display = ' ';
        userName.style.borderBottom = '2px solid #F90A0A';
        error_userName = true;
    }
};

const check_password = () => {
    let passwordLength = password.value.length;
    if(passwordLength < 8){
        passwordError.innerHTML = 'At leasst 8 characters';
        passwordError.style.display = ' ';
        password.style.borderBottom = '2px solid #F90A0A';
        error_password = true;
    } else {
        passwordError.style.display = 'none';
        password.style.borderBottom = '2px solid #34F458';
    }
};

submitbutton.onclick = () =>{
    error_userName = false;
    error_password = false;
    check_userName();
    check_password();

    if(error_userName === false && error_password === false){
             $('#sign-up').attr('href', 'customer.html');
            window.alert('successs');
            return true;
        } else {
            return false;
        }
}
