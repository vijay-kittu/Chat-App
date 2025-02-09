import React, { useState } from 'react';
import Contact from './Contact';
import Redirecting from './Redirecting';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    email: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8080/api/users/register", formData);

      console.log("User added:", response.data);
      setMessage("Registration successful!");
      <Redirecting />
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
    catch (error) {
      console.error("Error adding user:", error);
      setMessage("Server error! Try again later.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder="Username" value={formData.userName} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ color: message === "Registration successful!" ? "green" : "red" }}>{message}</p>}

      <Contact />
    </div>
  );
};

export default Register;
