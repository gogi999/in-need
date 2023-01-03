import './Register.css';

import React from 'react';

const Register = () => {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">InNeed</h3>
                    <span className="login-desc">
                        Connect with friends and the world around you on InNeed social network.{" "}
                    </span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input  
                            placeholder="Username" 
                            className="login-input" 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="login-input" 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="login-input"    
                        />
                        <input 
                            type="password" 
                            placeholder="Repeat password" 
                            className="login-input" 
                        />
                        <button className="login-btn">Sign Up</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-btn">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register
