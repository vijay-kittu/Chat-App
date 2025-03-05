import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Home from "./components/Home";
import Header from "./components/Header";
import Chat from "./components/Chat";
import PrivateChat from "./components/PrivateChat";
import Register from "./components/Register";
import Login from "./components/Login";
import Redirecting from "./components/Redirecting";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/private-chat/:userId" element={<PrivateChat />} />
            <Route path="/register" element={<Register />} />
            <Route path="/redirecting" element={<Redirecting />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        <div className="end-note">This website is under development.</div>
      </div>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
