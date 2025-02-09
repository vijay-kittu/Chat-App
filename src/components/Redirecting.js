import React from "react";
import { useNavigate } from "react-router-dom";

const Redirecting = () => {
    const navigate = useNavigate();
    
    setTimeout(() => {
        navigate("/home");
      }, 2000);
    return(
        <div>
            <div>Redirecting...</div>
        </div>
    )
}

export default Redirecting;