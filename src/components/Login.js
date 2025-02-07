/*import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    console.log('Logging in:', username, password);
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <Link to="/register">Don't have an account? Register here!</Link>
    </div>
  );
};

export default Login;
*/

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Contact from './Contact';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use useHistory hook to redirect

  const handleLogin = async () => {
    const loginData = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // If login is successful, you can redirect to the home page or any other page
        navigate('/'); // This redirects to the home page
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('An error occurred during login');
      console.error('Error:', error);
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <Link to="/register">Don't have an account? Register here!</Link>
      <Contact />
    </div>
  );
};

export default Login;
