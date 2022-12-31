import './Login.css';

import React from 'react';

const Login = () => {
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
                            type="email" 
                            placeholder="Email" 
                            className="login-input" 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="login-input"    
                        />
                        <button className="login-btn">Log In</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-btn">
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
