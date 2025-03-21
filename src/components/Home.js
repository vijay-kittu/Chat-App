import React, { useContext } from "react";
import Chat from "./Chat";
import { Link, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import { AuthContext } from "./AuthContext";
import { useAuth } from "./AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="login-to-continue">
        <h2>Please</h2>
        <Link to="/login">login</Link>
        <h2>to continue.</h2>
      </div>
    );
  }

  return (
    <div className="home">
      {/*<Navbar />*/}
      <div className="homepage_distribution">
        <Chat />
        {/*<PrivateChat />*/}
      </div>
      <br></br>
      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
      {/*<Contact />*/}
    </div>
  );
};

export default Home;
