import {createServer} from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename)


import {server as websocketserver} from 'websocket'


const httpserver=createServer();
httpserver.listen(9090,()=>{
    console.log("Listening on 9090")
})

const wsserver=new websocketserver({
    "httpServer":httpserver
})

//Storing Sign in Values
const clients={};


//Cipher 
function Caesar(str){
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);
  
    function rot13(correspondance) {
      const charCode = correspondance.charCodeAt();
      //A = 65, Z = 90
      return String.fromCharCode(
              ((charCode + 13) <= 90) ? charCode + 13
                                      : (charCode + 13) % 90 + 64
             );
}
}

wsserver.on("request",request=>{
    const connection=request.accept(null,request.origin);
    connection.on('open',()=>console.log("Open"))
    connection.on('close',()=>console.log("Close"))

    console.log("usr connected");
    //Session Management

    connection.on("message",(message)=>{
        const request=JSON.parse(message.utf8Data);

        //
        if(request.method==="SignIn"){
            
            //Give Him His Value of Sign In
            const emailid=request.email;
            const password=request.password;
            let username=null;
            let e=false;
            //Doesnt Exist
            if(!clients[Caesar(emailid)] || clients[Caesar(emailid)].password!=password)
            {
                e=true; 
            }
            else 
                {
                    username=clients[Caesar(emailid)].username;
                }                
            

            const payload={
                "method":"SignIn",
                "username":username,
                "error":e
            }

            connection.send(JSON.stringify(payload));
        }

        if(request.method==="SignUp"){
            console.log(request);
            let username=request.username;
            const password=request.password;
            const emailid=request.email;
            let e=true;
            if(!clients[Caesar(emailid)]){
            clients[Caesar(emailid)]={
                "username":username,
                "password":password,
                "emailid":emailid,
            }
        
            e=false;
        }
        else{
            username=clients[Caesar(emailid)].username;
        }

            const payload={
                "method":"SignUp",
                "username":username,
                "error":e
            }
        console.log(clients);
            connection.send(JSON.stringify(payload));

        }
        
    })












})

















