import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar">
    <Link className='section' to="/">Home</Link>
    <Link className='section' to="/chat">General Chat</Link>
    <Link className='section' to="/login">Login</Link>
    <Link className='section' to="/register">Register</Link>
  </nav>
);

export default Navbar;