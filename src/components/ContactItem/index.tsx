import React from 'react';

import { Container } from './styles';

import Notification from '../Notification';

interface ContactItemProps {
  notification?: number
}

const ContactItem: React.FC<ContactItemProps> = ({ notification }) => {
  return (
    <Container>
      <img 
        src="https://avatars2.githubusercontent.com/u/48386738?s=400&u=3f9a149d5c9e6c854b0678f684a5b2c080ab6400&v=4"
        alt="Contact"
      />
      <div style={{ marginRight: 'auto' }}>
        <strong>Gabriel Gigante</strong>
        <p>Empresa</p>
      </div>

      {notification &&
        <Notification number={notification} size={16} fontSize={12}/>
      }
    </Container>
  );
}

export default ContactItem;