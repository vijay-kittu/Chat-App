import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import RequestsList from "./RequestsList";
import axios from "axios";

const FriendsList = () => {
  const { friend, setFriend } = useContext(AuthContext);
  const [showRequests, setShowRequests] = useState(false);

  const fetchFriends = async () => {
    try {
      //const friendResponse = await axios.get("");
      setFriend(/*friendResponse.data*/ null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFriends(); // 👈 Fetch messages when the component mounts
  }, []);

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
          {!friend || friend.length === 0 ? (
            <p className="empty-message">Your Friends List is empty</p>
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
      <div className="end-note">This part of website is under development.</div>
    </div>
  );
};

export default FriendsList;
