import React from 'react';
import { useState } from 'react';
import "./Login.css";
const Login=()=>{
    
    const [popupStyle , showPopup]=useState("hide")
    const popup=()=>{
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide"),3000)
    }


    return(
        <>
            <div className='cover'>
            <h1 className='head'>LOGIN</h1>
                <input type="text"  placeholder='Enter your active Email ID/Username'/>
                <input type='password' placeholder='Enter your password' />
                <div className='login-btn' onClick={popup}>LOGIN</div>
                <p className='text'>Or login using</p>
                <div className='alt-login'>
                    <div className='facebook'></div>
                    <div className='google'>
                   
                    </div>
                </div>
 <div className={popupStyle}>
    <h3>Login Failed</h3>
    <p>Username or password incorrect</p>

 </div>
            </div>
        </>
    );
};
export default Login;