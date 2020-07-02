import React from 'react';
import { FaCheckDouble } from 'react-icons/fa';

import { Container, MessagesContainer, MessageContainer, Sender, Message } from './styles';

import { Message as MessageInterface } from '../../pages/Dashboard';

import TypeMessage from '../TypeMessage';

interface ChatProps {
  messages: MessageInterface[]
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <Container>
      <MessagesContainer>
        {messages && messages.map(message => (
          <MessageContainer isMine={message.isMine}>
          <Sender isMine={message.isMine}>
            <img 
              src="https://avatars2.githubusercontent.com/u/48386738?s=400&u=3f9a149d5c9e6c854b0678f684a5b2c080ab6400&v=4" 
              alt="Sender"
            />
            <strong>{message.sender}</strong>
            <p>{message.datetime}</p>

            <FaCheckDouble size={18} color={message.seen ? "#2dc4ba" : "#ddd"} />
          </Sender>

          <Message isMine={message.isMine}>
            <p>{message.message}</p>
          </Message>
        </MessageContainer>
        ))}
      </MessagesContainer>

      <TypeMessage />
    </Container>
  );
}

export default Chat;