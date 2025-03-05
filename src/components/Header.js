import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useAuth } from "./AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="header">
      <h2>{user ? "HyThere, " + user.userName + "!" : "HyThere!"}</h2>
      <div></div>
      <a href="https://portfolio-9ig1fanwl-vijay-krishnas-projects-32b38d2f.vercel.app/">
        Return to Portfolio
      </a>

      {/*<nav className="header">
        <Link className='section' to="/">Home</Link>
        <Link className='section' to="/chat">General Chat</Link>
        <Link className='section' to="/login">Login</Link>
        <Link className='section' to="/register">Register</Link>
      </nav>*/}
    </div>
  );
};

export default Header;
