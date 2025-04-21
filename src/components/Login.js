import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const checkUserExists = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/users/get/{loginData.userName}`
      );
      return response.data;
    } catch (error) {
      console.error("Incorrect username or password.Try again.", error);
      return false;
    }
  };

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginMessage("");

    if (!checkUserExists()) {
      setLoginMessage("Username does not exist.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/users/login`,
        loginData
      );
      if (response.status === 200) {
        login({ userName: loginData.userName });
        setLoginMessage("Login successful!");
        setTimeout(() => {
          navigate("/redirecting");
        }, 500);
      }
    } catch (error) {
      setLoginMessage("Invalid username or password.");
    }
  };

  const handleLoginViaGmail = async (googleCredential) => {
    setLoginMessage("");

    if (!checkUserExists()) {
      setLoginMessage("Username does not exist.");
      return;
    }
    const credential = jwtDecode(googleCredential.credential);
    const username = credential.name;
    const password = credential.sub;
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/login`, {
        userName: username,
        password: password,
      });
      if (response.status === 200) {
        login({ userName: username });
        setLoginMessage("Login successful!");
        setTimeout(() => {
          navigate("/redirecting");
        }, 500);
      }
    } catch (error) {
      setLoginMessage("Invalid username or password.");
    }
  };

  return (
    <div className="login">
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
      <br />
      <Link to="/register">Don't have an account? Register here!</Link>
      <br></br>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(jwtDecode(credentialResponse.credential));
          handleLoginViaGmail(credentialResponse);
        }}
        onError={() => console.log("Login Failed!")}
      />
      {/*<Contact />*/}
    </div>
  );
};

export default Login;
