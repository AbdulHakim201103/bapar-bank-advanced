document.getElementById('submit-button').addEventListener('click',function () {
    const emailField = document.getElementById('email-address');
    const userEmail = emailField.value;
    // get oassword
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;

    if (userEmail != '' && userPassword != '') {
        window.location.href ='index2.html';
    } 
});







