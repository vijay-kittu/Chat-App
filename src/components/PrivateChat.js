import React from 'react';
import { useParams } from 'react-router-dom';

const PrivateChat = () => {
  const { userId } = useParams();
  return(
    <div className='private_chat'>
      <h1>Chat with {userId}</h1>
    </div>
  ); 
};

export default PrivateChat;