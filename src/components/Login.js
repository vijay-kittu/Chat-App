import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Contact from './Contact';
import axios from 'axios';
import Redirecting from './Redirecting';

/*const Login = () => {
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

export default Login;*/

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName:"",
    password:""
  });
  const [message, setMessage] = useState("");
  

  /*const handleChange = (event) => {
    setLoginData({...loginData, [event.target.name] : event.target.value});
  };

  /*const response = axios.get("http://localhost:8080/api/users/get/{userName}");
  const handleSubmit = async(event) => {
    event.preventDefault();
    setMessage("");
    try {
      const response = axios.get("http://localhost:8080/api/users/get/{userName}", formData);
      return (await response).data;
      setMessage("Login successful!");
      <Redirecting />
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
    catch (error) {
      console.error("Incorrect username or password! Please try again.");
      setMessage("Incorrect username or password! Try again later.");
    }
  }*/

  const checkUserExists = async() => {
    try{
      const response = await axios.get("http://localhost:8080/api/users/get/{userName}");
      return response.data;
    }
    catch(error){
      console.error("Incorrect username or password.Try again.",error);
      return false;
    }
  };

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleLogin = async(event) => {
    event.preventDefault();
    setMessage("");

    const userExists = await checkUserExists();
    if(!userExists){
      setMessage("Username does not exist.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/users/login", loginData);

      if (response.status === 200) {
        console.log("Login successful!");
        // Redirect to dashboard or home
      }
    }
    catch (error) {
      setMessage("Invalid username or password.");
    }
  
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={loginData.userName}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <Link to="/register">Don't have an account? Register here!</Link>
      <Contact />
    </div>   
  );
  
}

export default Login;
