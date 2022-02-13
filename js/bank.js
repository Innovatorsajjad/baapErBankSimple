//log-in form click effect..............
document.getElementById("login-submit").addEventListener("click",function(){
    //get user Email....
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    
    //get user password.....
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if(userEmail=="sk.sajjad4207@gmail.com" && userPassword=="iammridul"){
        window.location.href = 'banking.html'
    }
    })

