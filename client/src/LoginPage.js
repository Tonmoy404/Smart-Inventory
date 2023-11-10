import React, { useState } from 'react';
import './LoginPage.css'; // Make sure to adjust the path if needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // You can add more advanced authentication logic here
    // For this example, we'll just check if the email and password are not empty
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
    } else {
      // You can handle the log-in logic here
      // For this example, we'll just show an alert
      alert('Logged in successfully!');
    }
  };

  return (
    <div className="overlay-container">
      <div className="container">
        <h1>Log In</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="error" id="error-message">
            {errorMessage}
          </div>
          <button type="submit">Log In</button>
          <p>Don't have an account?</p>
          <a href="signup.html">Sign Up here</a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
