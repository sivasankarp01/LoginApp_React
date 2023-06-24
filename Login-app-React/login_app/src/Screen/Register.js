import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Register() {
  const showpass=()=>{
    var x=document.getElementById("password");
    return x.type==="password" ? x.type="text": x.type="password";
 }
 ///
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [uname,setUname]=useState("");
 const [loginstatus,setLoginstatus]=useState("");
 

 const regii= (e)=>{

  if(uname===""){
    setLoginstatus(<p style={{color:"red"}}>useer name should be filled</p>)
     }
else if(email===""){
setLoginstatus(<p style={{color:"red"}}>email should be filled</p>)
 } else  if(password===""){
  setLoginstatus(<p style={{color:"red"}}>password should be filled</p>)
   }
 else{
  e.preventDefault();
  axios.post("http://localhost:3001/register", {
    email: email,
    uname: uname,
    password: password,
  }).then((response) => {
    if(response.data.message){
      setLoginstatus(response.data.message);
    }else{
      setLoginstatus("ACCOUNT CREATED SUCCESSFULLY");
    }
  })
 }
}

  return (
    
    <div className="App">
         
          <div className="logincard">
             <form >
             <h2 >Register Form</h2>
           
                <b>User Name </b>
                <br/>
                <input className="inputtt" id="username" placeholder="User Name" type="text" onChange={(e)=>{setUname(e.target.value)}}/>
                <br/>
                <br/>
                <b>Email Id  </b>
                <br/>
                <input className="inputtt" id="email" placeholder="EmailId" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <br/>
                <br/>
                <b>Password  </b>
                <br/>
                <input className="inputtt" id="password"  placeholder="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <br/>
                <br/>
               
                Show Password  <input  type="checkbox" onClick={showpass}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Link className="linkk" to='/'>Login</Link>
                <Link  className="linkk" onClick={regii}>Register</Link>
                <h2>{loginstatus}</h2>
                
             </form>
          </div>   
    </div>
    
    
  );
}

