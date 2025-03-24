import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const RequestsList = () => {
  const { request } = useContext(AuthContext);

  return (
    <div>
      <h3>Requests for You</h3>
      {!friend ? (
        <p>No Requests Received</p>
      ) : (
        request.map((item, index) => (
          <div key={index} className="request">
            {item.userName}
            <div></div>
            <button>Accept</button>
            <button>Decline</button>
          </div>
        ))
      )}
    </div>
  );
};
