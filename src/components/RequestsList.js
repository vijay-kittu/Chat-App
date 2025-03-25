import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const RequestsList = ({ goBack = () => {} }) => {
  const { request } = useContext(AuthContext);

  return (
    <div className="requests-list">
      <div className="requests-list-heading">
        <h3>Requests for You</h3>
        <button onClick={goBack}>Friends</button>
      </div>

      {request.length === 0 ? (
        <p className="empty-message">No Requests Received</p>
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

export default RequestsList;
