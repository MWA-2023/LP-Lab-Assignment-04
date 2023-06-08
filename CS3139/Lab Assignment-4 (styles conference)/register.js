var uname = document.getElementById("name");
var email = document.getElementById("email");
var contact = document.getElementById("contact");

// verification code
var letters = /^[A-Za-z]+$/;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var digit =  /^\d{10}$/
function registration(){
    if(uname.value == ''){
        alert('Please enter your name');
    }
    else if(!letters.test(uname)){
        alert('Name field requires only alphabet characters');
    }
    else if(email == ''){
        alert('Please enter your email id');
    }
    else if(!filter.test(email)){
        alert('Invalid email!');
    }
    else if(contact < 10){
        alert('Contact number is less than 10 digit');
    }
    else if(!digit.test(contact)){
        alert('Invalid contact number');
    }
}
