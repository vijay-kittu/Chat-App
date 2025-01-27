import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import PrivateChat from './components/PrivateChat';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

import './App.css'
//import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    //<AuthProvider>
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to= "/login" />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/private-chat/:userId" element={<PrivateChat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/*<Navbar />*/}
        {/*<div className='homepage_distribution'>
          <Chat />
          <PrivateChat />
          <Contact />
        </div>*/}
      </Router>
    </div>
    //</AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;