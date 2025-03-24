import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import RequestsList from "./RequestsList";

const FriendsList = () => {
  const { friend } = useContext(AuthContext);
  const [showRequests, setShowRequests] = useState(false);

  return (
    <div className="friends-list">
      {/*<div>
        <h3>Your Friends</h3>
        <div></div>
        <button onClick={() => setShowRequests(!showRequests)}>
          {showRequests ? "Close Requests" : "Requests"}
        </button>
        {showRequests && <RequestsList />}
      </div>

      {!friend || friend.length === 0 ? (
        <p>Your Friends List is empty</p>
      ) : (
        friend.map((item, index) => (
          <div key={index} className="friend">
            {item.firstName}
            <div></div>
            <p></p>
          </div>
        ))
      )}*/}
      {showRequests ? (
        <RequestsList goBack={() => setShowRequests(false)} />
      ) : (
        <div>
          <div className="friends-list-heading">
            <h3>Your Friends</h3>
            <button onClick={() => setShowRequests(true)}>Requests</button>
          </div>
          {friend.length === 0 ? (
            <p>Your Friends List is empty</p>
          ) : (
            friend.map((item, index) => (
              <div key={index} className="friend">
                {item.firstName}
                <div></div>
                <p></p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
