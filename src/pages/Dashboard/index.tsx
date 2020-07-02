import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

import Navbar from '../../components/Navbar';
import ContactList from '../../components/ContactList';
import SideStrip from '../../components/SideStrip';
import Profile from '../../components/Profile';
import Chat from '../../components/Chat';

export interface Message {
  sender: string;
  datetime: string;
  message: string;
  isMine: boolean;
  seen: boolean;
}

const Dashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const messages = [
      {
        sender: 'Gabriel Gigante',
        datetime: '25/07/2020 00:00h',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isMine: true,
        seen: true,
      },
      {
        sender: 'Gabriel Gigante',
        datetime: '25/07/2020 00:00h',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isMine: false,
        seen: true,
      },
      {
        sender: 'Gabriel Gigante',
        datetime: '25/07/2020 00:00h',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isMine: false,
        seen: true,
      },
      {
        sender: 'Gabriel Gigante',
        datetime: '25/07/2020 00:00h',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isMine: true,
        seen: true,
      },
      {
        sender: 'Gabriel Gigante',
        datetime: '25/07/2020 00:00h',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isMine: false,
        seen: true,
      },
      {
        sender: 'Gabriel Gigante',
        datetime: '25/07/2020 00:00h',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isMine: true,
        seen: false,
      }
    ] as Message[]

    setMessages(messages);
  }, [setMessages]);

  return (
    <Container>
      <ContactList />

      <Content>
        <div>
          <Navbar />

          <div className="content">
            <SideStrip />
            <Chat messages={messages} />
          </div>
        </div>
        
        <Profile />
      </Content>
    </Container>
  );
}

export default Dashboard;