import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import PrivateChat from './components/PrivateChat';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './App.css'
//import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    //<AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/private-chat/:userId" element={<PrivateChat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    //</AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;