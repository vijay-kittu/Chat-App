import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const CLIENT_ID =
  "705513059089-flbl0p9ssdj1pqold04ja8pmduv6anof.apps.googleusercontent.com";
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
