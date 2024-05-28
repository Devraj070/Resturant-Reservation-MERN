import React, { useState } from 'react';
import './SignUp.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../../public/background.png'
import backgroundImage from '../Assets/background.png';



const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/signUp', { username, email, password })
    .then(result => {console.log(result)
    navigate('/')
    }
      
    )
    .catch(err => {
        if (err.response) {
            console.error('Server responded with error:', err.response.data);
            // Handle specific error cases here
        } else if (err.request) {
            console.error('No response received from server');
        } else {
            console.error('Error during request setup:', err.message);
        }
    });


    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="signup-container">
      <h2>Create your account !</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
    </div>

  );
};

export default SignUpForm;