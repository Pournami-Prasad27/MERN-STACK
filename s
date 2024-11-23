import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const Login = ({ onLogin, buttonLabel = "Login  Form" }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email, password });
      setError(''); 
    } else {
      setError('Please enter both email and password');
    }
  };


  useEffect(() => {
    if (email || password) {
      setError('');
    }
  }, [email, password]);

  return (
    <div className="login-container">
      <h2>{buttonLabel}</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div>
          
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          placeholder='Email or Phone'/>
        </div>
        <div>
          
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          placeholder='Password'/>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type="submit">{buttonLabel}</button>
      </form>
      <a href='#'><h5>Not a memeber?Signup now</h5></a>
    </div>
  );
};


Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string,
};

export default Login;
