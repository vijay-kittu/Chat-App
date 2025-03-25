import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export const RequestsList = ({ goBack = () => {} }) => {
  const { request /*, setRequest*/ } = useContext(AuthContext);

  /*const fetchRequests = async () => {
    try {
      const requestResponse = await axios.get("");
      setRequest(requestResponse.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRequests(); // 👈 Fetch messages when the component mounts
  }, []);*/

  return (
    <div className="requests-list">
      <div className="requests-list-heading">
        <h3 title="Requests">Requests for You</h3>
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
