import React, { useContext } from "react";
import { AuthContext, useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="header">
      <h2>{user ? "HyThere, " + user.userName + "!" : "HyThere!"}</h2>
      {/*<div className="space-block"></div>*/}
      <div className="space-block">
        {!user ? (
          <div></div>
        ) : (
          <button className="logout-buttons" onClick={handleLogout}>
            Log Out
          </button>
        )}
        {/*<a href="https://portfolio-9ig1fanwl-vijay-krishnas-projects-32b38d2f.vercel.app/">
          Return to Portfolio
        </a>*/}
      </div>

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
