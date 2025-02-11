import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Contact from './Contact';
import axios from 'axios';
import { AuthContext } from './AuthContext'; 

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName:"",
    password:""
  });
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext);
  

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
      const response = await axios.get("http://localhost:8080/api/users/get/{loginData.userName}");
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
    setLoginMessage("");

    /*const userExists = await checkUserExists();*/
    if(!checkUserExists){
      setLoginMessage("Username does not exist.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/users/login", loginData);
      if (response.status === 200) {
        setUser({ userName : loginData.userName });
        setLoginMessage("Login successful!");
        /*<Redirecting />*/
        setTimeout(() => {
          navigate("/redirecting");
        }, 500);
        // Redirect to dashboard or home
      }
    }
    catch (error) {
      setLoginMessage("Invalid username or password.");
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
      {loginMessage && <p style={{ color: "red" }}>{loginMessage}</p>}
      <Link to="/register">Don't have an account? Register here!</Link>
      <Contact />
    </div>   
  );
  
}

export default Login;
