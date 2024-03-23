import React, {  useState } from 'react';
import '../styles/SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInImg from '../assets/Image/SignInImg.png';
import Logo from '../assets/Image/Unicorn_Logo.png';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSignIn = async (event) => {
      event.preventDefault();
  
      try {
        // Fetch data from the API endpoint handling authentication
        const response = await fetch('https://gp-ooo8.onrender.com/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data.success) {
          // Login successful! Store relevant data in local storage
          localStorage.setItem('accessToken', data.accessToken);
          // Consider storing user ID instead of username for security
          localStorage.setItem('userId', data.userId);
  
          // Redirect to a protected route or dashboard after successful login
          window.location.href = '/dashboard';
        } else {
          setError('Invalid username or password');
        }
      } catch (error) {
        console.error('Sign in error:', error);
        setError('An error occurred. Please try again later.');
      }
    };
  console.log(error);

    return (
        <div className='container-fluid signin-container '>
            <div className='row'>
                <img src={SignInImg} className='signinimg col-8' alt='Sign In Img' />
                <div className='container-fluid col-4 logo-container'>
                    <div className='logo-header'>
                        <img src={Logo} className='logoImg' alt='Logo' />
                        <h1>Ui Unicorn</h1>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div className='signin-content'>
                            <h1>Nice to see you again</h1>

                            <label htmlFor='email-input'>Login</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email-input"
                                aria-describedby="email-area"
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor='password-input'>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password-input"
                                aria-describedby="password-area"
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>
                        <a href='/' className='forgot-password'>Forgot Password?</a>
                        <button
                            type="button"
                            className="btn btn-lg btn-block signin-button"
                            onClick={handleSignIn}
                        >
                            Sign in
                        </button>
                    </form>
                    <div className='have-account-container'>
                        <p>Don't have an account?</p>
                        <a href='/'>Sign up now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
