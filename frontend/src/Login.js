import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import "./Signup";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form
    setEmail('');
    setPassword('');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Forgot password');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Link to="/signup" className="btn btn-success">
            Sign Up
          </Link>
          <button type="button" className="forgot-password-link" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
          <div className="checkbox-container">
            <input type="checkbox" id="agree-checkbox" />
            <label htmlFor="agree-checkbox">I agree to the website's policies</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


