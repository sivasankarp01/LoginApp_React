import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(){

   const showpass=()=>{
      var x=document.getElementById("password");
      return x.type==="password" ? x.type="text": x.type="password";
   }
 ///////  22.6
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [loginstatus,setLoginStatus]=useState("");
 
 const navigatee= useNavigate();
 const loginn = (e) => {
  console.log(email)
  if(email===""){
   setLoginStatus(<p style={{color:"red"}}>email should be filled</p>)
  }
  else if(password===""){
    setLoginStatus(<p style={{color:"red"}}>passwordd should be filled</p>)
  }
  else{
      
   e.preventDefault();

   axios.post("http://localhost:3001/loginn", {
     email: email,
     password: password,
   }).then((response) => {
     if(response.data.message){
       setLoginStatus(response.data.message);
     }else{
       setLoginStatus(response.data[0].email);
       const dataaa=response.data[0].email;
       console.log(response.data);
      navigatee('/home',{ state: { dataaa}});
     }
   })

  }
 
 }

    return(
      <div className="App">
          <div className="logincard">
             <form >
                <h2 >Login </h2>
                <b>Email Id </b>
                <br/>
                <div><input className="inputtt" id="email" name="email" placeholder="EmailId" type="email" onChange={(e)=>{setEmail(e.target.value)}} /></div>
               <br/>
                <b>Password </b>
                <br/>
                <div><input className="inputtt" id="password" name="password" placeholder="Password" type="password"  onChange={(e)=>{setPassword(e.target.value)}} /></div>
                <br/>
                <br/>
               
                Show Password  <input type="checkbox" onClick={showpass}/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                 <Link  className="linkk" to='/register'>Register</Link>
                 <Link className="linkk" onClick={loginn}    >Login</Link>

                 <h2>{loginstatus}</h2>
                
               </form>
          </div>
    </div>
    );
}

export default Login;