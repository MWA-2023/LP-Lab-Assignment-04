const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');

const register=document.getElementById("register");
const rpassword=document.getElementById("rpassword");
const remail=document.getElementById("remail");


const login=document.getElementById("login");
const username=document.getElementById("user");
const lpassword=document.getElementById("lpassword");
const lemail=document.getElementById("lemail");


//WebSocket Connection

let ws = new WebSocket("ws://localhost:9090");


login.addEventListener('click',()=>{

    const payload={
        "method":"SignIn",
        "email":lemail.value,
        "password":lpassword.value,
    }
    ws.send(JSON.stringify(payload));
    console.log(lpassword.value);
    console.log(lemail.value);



})

register.addEventListener('click',()=>{

    console.log("Register");
    const payload={
        "method":"SignUp",
        "username":username.value,
        "email":remail.value,
        "password":rpassword.value,
    }
    ws.send(JSON.stringify(payload));
    console.log(rpassword.value);
    console.log(remail.value);
    console.log(username.value);
})

//Server Sending the message

ws.onmessage=message=>{
    const response=JSON.parse(message.data);

    if(response.method==="SignUp"){
        const e=response.error;
        // console.log("Error",e);
        if(e){
            console.log("Account Already exists with username-."+response.username)
            alert("Account Already exists with username-> "+response.username)
        }
        else{
            console.log("Sign Up Successfull")
            alert("Sign up Successful");
        }

}    

    if(response.method==="SignIn"){

        const error=response.error;
        if(error){
            console.log("Account Doesnt Exist");
            alert("Account Does Not Exist");
        }
        else{
            console.log("Successfully Signed In with username"+response.username);
            alert("Successfully Signed In with Username->"+response.username)
        }
        
        
    }    
}

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});     

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
}); 


