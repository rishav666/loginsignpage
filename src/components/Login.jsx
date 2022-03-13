import React, {useState,useEffect} from 'react';
import './login.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Login = () => {
   
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [button,setButton]=useState(true);
    const handleSubmit=()=>{
        var form = new FormData();
        form.append("\"email\"", email);
        form.append("\"password\"", pass);
        axios.post("https://forwardapi.auctionsoftware.com/mobileapi/loginsave", form, {
            headers: { "Content-Type": "multipart/form-data", "enabled": true }
        }).then(res => console.log(res));
    }
    useEffect(()=>{
         if(email.length>8 && pass.length>8){
                setButton(false)
         }
    },[email,pass])
    return (
      <div>
            <div class="loginBox">
                <div className="headingName">
                <p >Patric Convoy</p>
                </div>
                <div className="loginHeading">
                    <p>
                        LOGIN
                    </p>
                </div>
                <div className="welcomMessage">
                    <span>Aloha, welcome to Hawai'i Auction Services</span>
                    <br />
                    
                    <span>Continue logging into your account.</span>
                </div>
                <div className="emailInput">
                    <div className="emailInputHeading">
                        Email Address
                    </div>
                    <div className="emailInputFeild">
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email address" required/>
                    </div>
                </div>
                <div className="emailInput">
                    <div className="emailInputHeading">
                        Password
                    </div>
                    <div className="emailInputFeild">
                        <input type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter your email address" required/>
                    </div>
                </div>
                <div className="rememberMe">
                    <div className="textleft">
                        <input type="checkbox" name="input"/><span id="padright10"></span>
                        Remember Me
                    </div>
                    <div className="textright">
                      Forgot password?
                    </div>
                </div>
                <div className="loginButtonContainer">
                    
                       <button onClick={handleSubmit} disabled={button} className="loginButton">LOGIN</button>
                   
                </div>
                <div className="dontHaveAccount">
                Don't have an account?
                </div>
                <div className="dontHaveAccount">
                Register <Link to ='./signup'>here</Link>
                </div>
            

            </div>
            
            </div>
      
    )
}

export default Login