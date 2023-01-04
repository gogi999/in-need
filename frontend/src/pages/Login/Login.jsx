import './Login.css';

import React, {
  useContext,
  useRef,
} from 'react';

import { CircularProgress } from '@material-ui/core';

import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall(
            { 
                email: emailRef.current.value, 
                password: passwordRef.current.value 
            }, 
            dispatch
        );
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
                            type="email" 
                            placeholder="Email" 
                            required
                            className="login-input" 
                            ref={emailRef}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            required
                            minLength="6"
                            className="login-input"
                            ref={passwordRef}    
                        />
                        <button className="login-btn" type="submit" disabled={isFetching}>
                            {isFetching 
                                ? <CircularProgress color="inherit" size="20px" /> 
                                : "Log In"
                            }
                        </button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-btn">
                            {isFetching 
                                ? <CircularProgress color="inherit" size="20px" /> 
                                : "Create a New Account"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
