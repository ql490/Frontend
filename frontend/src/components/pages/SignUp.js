import React, { useState, useEffect } from 'react';
import SignFiled from '../inc/SignFiled';
import SignInImg from '../../assets/Image/SignInImg.png';
import Logo from '../../assets/Image/Unicorn_Logo.png';
import '../../SignIn.css';

export default function SignUp() {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Regular expressions for password validation
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSymbol = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password);
        const isValidLength = password.length >= 8;

        return hasUpperCase && hasNumber && hasSymbol && isValidLength;
    };

    const handleSignIn = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Handle sign in logic using the collected inputs
    };

    useEffect(() => {
        if (emailInputValue.trim() === '') {
            setEmailError('');
        } else {
            setEmailError(validateEmail(emailInputValue) ? '' : 'Please enter a valid email address.');
        }
    }, [emailInputValue]);

    useEffect(() => {
        if (passwordInputValue.trim() === '') {
            setPasswordError('');
        } else {
            setPasswordError(
                validatePassword(passwordInputValue)
                    ? ''
                    : 'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one symbol.'
            );
        }
    }, [passwordInputValue]);

    return (
        <div className='container-fluid signin-container'>
            <div className='row'>
                <img src={SignInImg} className='signinimg col-8' alt='Sign In Img' />
                <div className='container-fluid col-4 logo-container'>
                    <div className='logo-header'>
                        <img src={Logo} className='logoImg' alt='Logo' />
                        <h1>Ui Unicorn</h1>
                    </div>

                    <form onSubmit={handleSignIn}>
                        <div className='signin-content'>
                            <h1>Create new account</h1>

                            <SignFiled
                                type="email"
                                placeholder='Email'
                                value={emailInputValue}
                                onChange={(e) => setEmailInputValue(e.target.value)}
                            />

                            {emailError && <div className="error">{emailError}</div>}

                            <SignFiled
                                type="password"
                                placeholder='Password'
                                value={passwordInputValue}
                                onChange={(e) => setPasswordInputValue(e.target.value)}
                            />

                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>
                        <a href='/' className='forgot-password col-12 mt-10'>Forgot Password?</a>
                        <button
                            type="submit"
                            className="btn btn-lg btn-block signin-button col-12"
                            disabled={!validateEmail(emailInputValue) || !validatePassword(passwordInputValue)}
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className='have-account-container'>
                        <p>Do you have an account?</p>
                        <a href='/'>Sign in now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
