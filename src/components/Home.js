import React, { useContext } from "react";
import Chat from "./Chat";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useAuth } from "./AuthContext";
import FriendsList from "./FriendsList";

const Home = () => {
  const { user } = useContext(AuthContext);

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
        <div className="left">
          <FriendsList />
          {/*<button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>*/}
        </div>
        <div className="right">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
