import './Register.css';

import React, { useRef } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (confirmPasswordRef.current.value !== passwordRef.current.value) {
            confirmPasswordRef.current.setCustomValidity('Passwords do not match!');
        } else {
            const user = {
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }

            try {
                await axios.post('/auth/register', user);
                history.push('/login');
            } catch (err) {
                console.log(err);
            }
        }
    }

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
                    <form className="login-box" onSubmit={handleSubmit}>
                        <input  
                            placeholder="Username" 
                            className="login-input" 
                            ref={usernameRef}
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="login-input" 
                            ref={emailRef}
                            required
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="login-input" 
                            ref={passwordRef}  
                            minLength="6"
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Repeat password" 
                            className="login-input" 
                            ref={confirmPasswordRef}
                            required
                        />
                        <button type="submit" className="login-btn">
                            Sign Up
                        </button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-btn">
                            Log into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register
