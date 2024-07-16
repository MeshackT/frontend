import React from "react";
import './css/loginSignUp.css';

const LoginSignUp = () => {

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" name="" id="" placeholder="Enter your name" />
                    <input type="email" name="" id="" placeholder="Enter your email address" />
                    <input type name="password" id="" placeholder="Enter your password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account?
                    <span>Login Here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use and privacy policy</p>
                </div>
            </div>
            
        </div>
    )
}

export default LoginSignUp