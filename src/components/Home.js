import React from 'react';
import Chat from './Chat';
import PrivateChat from './PrivateChat';
import Contact from './Contact';
import Navbar from './Navbar';

const Home = () => (
  <div className='home'>
    <div className='head'>
      <h2>HYTHERE!</h2>
    </div>
    <h3>Welcome to Chat App</h3>
    <Navbar />
    <div className="homepage_distribution">
      <Chat />
      <PrivateChat />
      
    </div>
    <Contact />
  </div>
);

export default Home;