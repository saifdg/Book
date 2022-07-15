import React from "react";
import "./Login.css"
import {userState} from "react";
import { Link } from "react-router-dom";


const Login =()=>{
    //const intialValues={email:"",password:""};//
    //const {fromValues,setFormValues}=userState();//

return(
<div className="container">
    <from>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
           
            <div class="filed">
            <label>Email</label>
            <input type="text" name="email" placeholder="email"   id="email" required></input> 
        </div>


        <div class="filed">
            <label>Password</label>
            <input type="text" name="password" placeholder="password"  id="password" required></input>
        </div>

        <button className="fluid ui button blue">Submit</button>

        </div>





    </from>








</div>

)

}

export default Login;