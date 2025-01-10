import React from 'react';
import { useParams } from 'react-router-dom';

const PrivateChat = () => {
  const { userId } = useParams();
  return <h1>Chat with {userId}</h1>;
};

export default PrivateChat;