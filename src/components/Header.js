import React, { useContext } from "react";
import { AuthContext, useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="header">
      <h2>{user ? "HyThere, " + user.userName + "!" : "HyThere!"}</h2>

      <div className="space-block">
        {!user ? (
          <div></div>
        ) : (
          <button className="logout-buttons" onClick={handleLogout}>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
