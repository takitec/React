import React, { useState } from 'react';
import { signup } from './Service/apiService';

function Signup({ onSignupSuccess }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const data = await signup({ username, email, password });
        console.log(data);
        setSuccessMessage('User successfully registered! Redirecting to login...');
        setTimeout(() => {
          onSignupSuccess(data); // Pass user data to the parent component
        }, 2000); // Adjust the delay as needed
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Passwords do not match');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {successMessage && <p>{successMessage}</p>}
      {!successMessage && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      )}
    </div>
  );
}

export default Signup;
