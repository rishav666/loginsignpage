import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './signup.css';
import {Link} from 'react-router-dom';
const Signup = () => {
    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [bname, setBname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [button,setButton]=useState(true);
    useEffect(()=>{
        if(email.length>8 && pass.length>8 && phone.length>=10 && phone.length<13 ){
               setButton(false)
        }
   },[email,pass,name,lname,phone])
    const showdata = () => {
        var form = new FormData();
        form.append("\"lastName\"", lname);
        form.append("\"email\"", email);
        form.append("\"password\"", pass);
        form.append("\"firstName\"", name);
        axios.post("https://forwardapi.auctionsoftware.com/mobileapi/registration_withoutcard", form, {
            headers: { "Content-Type": "multipart/form-data", "enabled": true }
        }).then(res => console.log(res));
    }
    return (
        <div className="signUpForm">
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

                <span>Create and account today and benefit with the best services..</span>
            </div>
            <div className="personalHeading">
                <h3>PERSONAL DETAILS</h3>
            </div>
            <form action="/">
                <div className="name">
                    <div className="fName">
                        <h4>First Name</h4>
                        <input onChange={(e) => { setName(e.target.value) }} className="inputFeild" type="text" placeholder='Enter you first name' required />
                    </div>
                    <div className="sName">
                        <h4>Last Name</h4>
                        <input onChange={(e) => { setLname(e.target.value) }} className="inputFeild" type="text" placeholder='Enter your last name' />
                    </div>
                </div>
                <div className="name">
                    <div className="fName">
                        <h4>Business Name</h4>
                        <input onChange={(e) => { setBname(e.target.value) }} className="inputFeild" type="text" placeholder='Enter your business name' />
                    </div>
                    <div className="sName">
                        <h4>Email Address</h4>
                        <input onChange={(e) => { setEmail(e.target.value) }} className="inputFeild" type="text" placeholder='Enter your email address' />
                    </div>
                </div>
                <div className="name">
                    <div className="fName">
                        <h4>Phone Number</h4>
                        <input onChange={(e) => { setPhone(e.target.value) }} className="inputFeild" type="text" placeholder='Enter you Phone number' />
                    </div>
                    <div className="sName">
                        <h4>Password</h4>
                        <input onChange={(e) => { setPass(e.target.value) }} className="inputFeild" type="password" placeholder='Enter your password' />
                    </div>
                </div>
                <div className="name">
                    <div className="fName">
                        <h4>Confirm Password</h4>
                        <input className="inputFeild" type="text" placeholder='Re-enter your password' />
                    </div>
                    <div className="sName">
                        <h4>Country</h4>
                        <select className="inputFeild" placeholder="select your country" >
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Bnagladesh">Bnagladesh</option>
                            <option value="Nepal">Nepal</option>
                        </select>
                    </div>
                </div>
                <div className="name">
                    <div className="fName">
                        <h4>State</h4>
                        <select className="inputFeild" placeholder="select your country" >
                            <option value="Utter pradesh">Utter pradesh</option>
                            <option value="Madhya pradesh">Madhya pradesh</option>
                            <option value="Orissa">Orissa</option>
                            <option value="Punjab">Punjab</option>
                        </select>                </div>
                    <div className="sName">
                        <h4>City</h4>
                        <select className="inputFeild" placeholder="select your country" >
                            <option value="Agra">Agra</option>
                            <option value="chennai">chennai</option>
                            <option value="jalandhar">jalandhar</option>
                            <option value="jammu">jammu</option>
                        </select>
                    </div>
                </div>
                <div className="name">
                    <div className="fName">
                        <h4>Address Line-1</h4>
                        <input onChange={(e) => { setEmail(e.target.value) }} className="inputFeild" type="text" placeholder='Enter your Address Line-1' />
                    </div>
                    <div className="sName">
                        <h4>Address Line-1</h4>
                        <input onChange={(e) => { setEmail(e.target.value) }} className="inputFeild" type="text" placeholder='Enter your Address Line-1' />
                    </div>
                </div>
                <div className="name">
                    <div className="fName">
                        <h4>Zip Code</h4>
                        <input onChange={(e) => { setEmail(e.target.value) }} className="inputFeild" type="text" placeholder='Enter your Enter your zip code' />
                    </div>
                    <div className="sName">
                        <h4>GE Tax-exempt form</h4>
                        <input className="inputFeild" type="file" accept="application/pdf" placeholder='Enter your Address Line-1' />
                    </div>
                </div>
                <div className="checkbox">
                    <input type="checkbox" /> I agree to the <a href="#"> Terms and Conditions</a>
                </div>
                <Link to="/home">
                  <div className="loginButtonContainer">

                    <button onClick={showdata} disabled={button} className="loginButton">SUBMIT</button>

                </div></Link>
                <div className="welcomMessage">aleardy a customer <Link to="/"> Login here</Link></div>
                </form>
        </div>
    )
}

export default Signup