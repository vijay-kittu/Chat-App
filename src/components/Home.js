import React, {useContext} from 'react';
import Chat from './Chat';
import PrivateChat from './PrivateChat';
import Contact from './Contact';
import Navbar from './Navbar';
import { AuthContext } from './AuthContext';

const Home = () => {

  const {user} = useContext(AuthContext);

  if(!user){
    return <h2>Please login to continue.</h2>
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