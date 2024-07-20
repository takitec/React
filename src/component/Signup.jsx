import React, { useState } from 'react';
import { signup } from './Service/apiService';

const Signup = ({ onSignupSuccess }) => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPassword] = useState('')

  const handleSignup = async () => {
    try {
      const data = await signup(id, username, email, password, confirmPass);
      console.log('Signup successful', data);
      onSignupSuccess(data); // Handle successful signup (e.g., store token, redirect)
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="confirmPass" placeholder="confirmPass" value={confirmPass} onChange={e => setConfirmPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
