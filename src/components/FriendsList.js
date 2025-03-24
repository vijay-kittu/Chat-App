import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const FriendsList = () => {
  const { friend } = useContext(AuthContext);

  return (
    <div>
      <h3>Your Friends</h3>
      {!friend ? (
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
  );
};

export default FriendsList;
