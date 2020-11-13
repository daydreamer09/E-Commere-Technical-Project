$(document).ready( () => {

$(function validate(){
    $('#firstName-error-message').hide();
    $('#lastName-error-message').hide();
    $('#userName-error-message').hide();
    $('#email-error-message').hide();
    $('#password-error-message').hide();

    var error_firstName = false;
    var error_lastName = false;
    var error_userName = false;
    var error_password = false;
    var error_email = false;

    
    $('#firstName').focusout( () => {
        check_firstName();
    });

    $('#lastName').focusout( () => {
        check_lastName();
    });

    $('#userName').focusout( () => {
        check_userName();
    });

    $('#email').focusout( () => {
        check_email();
    });

    $('#password').focusout( () => {
        check_password();
    });

    const check_firstName = () => {
        let pattern = /^[a-zA-z]*$/;
        let firstName = $('#firstName').val();
        if (pattern.test(firstName) && firstName !== ''){
            $('#firstName-error-meassage').hide();
            $('#firstName').css('border-bottom', '2px solid #34F458');
        }else {
            $('#firstName-error-message').html('should contain only characters');
            $('#firstName-error-message').show();
            $('#firstName').css('border-bottom', '2px solid #F90A0A');
            error_firstName = true;
        }
    };

    const check_firstName = () => {
        let pattern = /^[a-zA-z]*$/;
        let firstName = $('#firstName').val();
        if (pattern.test(firstName) && firstName !== ''){
            $('#firstName-error-meassage').hide();
            $('#firstName').css('border-bottom', '2px solid #34F458');
        }else {
            $('#firstName-error-message').html('should contain only characters');
            $('#firstName-error-message').show();
            $('#firstName').css('border-bottom', '2px solid #F90A0A');
            error_firstName = true;
        }
    };

    const check_lastName = () => {
        let pattern = /^[a-zA-z]*$/;
        let lastName = $('#lastName').val();
        if (pattern.test(lastName) && lastName !== ''){
            $('#lastName-error-meassage').hide();
            $('#lastName').css('border-bottom', '2px solid #34F458');
        }else {
            $('#lastName-error-message').html('should contain only characters');
            $('#lastName-error-message').show();
            $('#lastName').css('border-bottom', '2px solid #F90A0A');
            error_lastName = true;
        }
    };

    const check_userName = () => {
        let pattern = /^[a-zA-z]*$/;
        let userName = $('#userName').val();
        if (pattern.test(userName) && userName !== ''){
            $('#userName-error-meassage').hide();
            $('#userName').css('border-bottom', '2px solid #34F458');
        }else {
            $('#userName-error-message').html('should contain only characters');
            $('#userName-error-message').show();
            $('#userName').css('border-bottom', '2px solid #F90A0A');
            error_userName = true;
        }
    };

    const check_password = () => {
        let passwordLength = $('#password').val().length;
        if(passwordLength < 8){
            $('#password-error-message').html('At leasst 8 characters');
            $('#password-error-message').show();
            $('#password').css('border-bottom', '2px solid #F90A0A');
            error_password = true;
        } else {
            $('#password-error-message').hide();
            $('#password').css('border-bottom', '2px solid #34F458');
        }
    };

    const check_email = () => {
        let pattern = /^([w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let email = $('#email').val();
        if (pattern.test(email) && email !== ''){
            $('#email-error-meassage').hide();
            $('#email').css('border-bottom', '2px solid #34F458');
        }else {
            $('#email-error-message').html('Invalid Email');
            $('#email-error-message').show();
            $('#email').css('border-bottom', '2px solid #F90A0A');
            error_email = true;
        }
    };

    
    

    $('#registration-form').submit( () => {
         error_firstName = false;
         error_lastName = false;
         error_userName = false;
         error_password = false;
         error_email = false;

         check_firstName();
         check_lastName();
         check_userName();
         check_email();
         check_password();

         if(error_firstName === false && error_lastName === false && error_userName === false
            && error_email === false && error_password === false){
                $('#sign-up').attr('href', 'customer.html');
                return true;
            } else {
                return false;
            }

    });

});

        
});

// $(document).ready( () => {
//     let $usernameValue = $('.username').value,
//      $passwordValue = $('.password').value,
//      $nameValue = $('.name').value,
//      $emailValue = $('.email').value,
//      letters = /^[A-Za-z]+$/,
//      numbersAndLetters = /^[0-9a-zA-Z]+$/,
//      emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//      $('.sign-button').on('click', () => {
//         // if ($emailValue.match(emailRegex) && $passwordValue.match(numbersAndLetters) 
//         // && $usernameValue.match(letters) && $nameValue.match(letters)){
//         //      $('#sign-up').attr('href', 'customer.html'); 
    
//         // }else{
//         //    $('.sign-button').toggle();
//         // }
//         checkValues();
//      })
    
