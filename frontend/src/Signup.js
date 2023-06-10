import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleRelationshipStatusChange = (e) => {
    setRelationshipStatus(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Perform signup logic here
    console.log('First Name:', firstName);
    console.log('Middle Name:', middleName);
    console.log('Last Name:', lastName);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Relationship Status:', relationshipStatus);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setDateOfBirth('');
    setAge('');
    setGender('');
    setRelationshipStatus('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" className="form-control" value={firstName} onChange={handleFirstNameChange} required />
            <label htmlFor="middle-name">Middle Name:</label>
            <input type="text" id="middle-name" className="form-control" value={middleName} onChange={handleMiddleNameChange} />
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" className="form-control" value={lastName} onChange={handleLastNameChange} required />
            <button type="button" onClick={handleNextPage} className="btn btn-primary">
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="form-group">
            <label htmlFor="date-of-birth">Date of Birth:</label>
            <input type="date" id="date-of-birth" className="form-control" value={dateOfBirth} onChange={handleDateOfBirthChange} required />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" className="form-control" value={age} onChange={handleAgeChange} required />
            <label htmlFor="gender">Gender:</label>
            <input type="text" id="gender" className="form-control" value={gender} onChange={handleGenderChange} required />
            <button type="button" onClick={handlePrevPage} className="btn btn-secondary">
              Previous
            </button>
            <button type="button" onClick={handleNextPage} className="btn btn-primary">
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="form-group">
            <label htmlFor="relationship-status">Relationship Status:</label>
            <input type="text" id="relationship-status" className="form-control" value={relationshipStatus} onChange={handleRelationshipStatusChange} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" value={email} onChange={handleEmailChange} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} required />
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" className="form-control" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <button type="button" onClick={handlePrevPage} className="btn btn-secondary">
              Previous
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Registration Process {currentPage}</h2>
        <form onSubmit={handleSubmit}>
          {renderPage()}
          <Link to="/login" className="btn btn-link login-link">
            Already have an account? Login
          </Link>
          <div className="checkbox-container">
            <input type="checkbox" id="agree-checkbox" />
            <label htmlFor="agree-checkbox">I agree to the website's policies</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

