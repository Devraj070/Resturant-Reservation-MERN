import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
// import SignUp from './SignUp';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import backgroundImage from '../Assets/background.png';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/Login',{username, password})
    .then(res =>{
      console.log(res);
      if(res.data === "success"){
        navigate('/Home')
      }
      else{
        alert("Login failed!!!")
      }
    })
    onLogin(username);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="content-area"> {/* Apply the content-area class */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-field"
        />
          <p className='forgot-password'>Forgot password ?</p>

        <button type="submit" className="submit-btn">
          Login
        </button>
        <br/>
        <div className='font-size-signUp'>Don't have an account ? <span className='sign-up'><Link to='/SignUp'>Sign up</Link></span> </div>
      </form>

      
    </div>
    </div>

    
  );
};

export default Login;
