import React, {useContext} from 'react';
import Chat from './Chat';
import { Link } from 'react-router-dom';
import PrivateChat from './PrivateChat';
import Contact from './Contact';
import Navbar from './Navbar';
import { AuthContext } from './AuthContext';

const Home = () => {

  const {user} = useContext(AuthContext);

  if(!user){
    return(
      <div>
        <h2>Please</h2>
        <Link to="/login">login</Link>
        <h2>to continue.</h2>
      </div>
      
    ) ;
  }

  return(
    <div className='home'>
      <div className='head'>
        <h2>HYTHERE!</h2>
      </div>
      <h3>Welcome to Chat App, {user.userName}</h3>
      <Navbar />
      <div className="homepage_distribution">
        <Chat />
        <PrivateChat />
        
      </div>
      <Contact />
    </div>
  );
};

export default Home;