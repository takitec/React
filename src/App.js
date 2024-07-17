import React, { useState } from 'react';
import './component/loginsignup.css';
import Signup from './component/Signup';
import Login from './component/Login';

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // Set to false to show the login form initially
  const [setUser] = useState(null);

  const handleSignupSuccess = (userData) => {
    setUser(userData);
    setShowSignup(true); // Switch to login form after successful signup
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true); // User is logged in
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="App">
      {showSignup ? (
        <Signup onSignupSuccess={handleSignupSuccess} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
      <button className="toggle-button" onClick={() => setShowSignup(!showSignup)}>
        {showSignup ? 'Switch to Login' : 'Switch to Signup'}
      </button>
    </div>
  );
}

export default Auth;
