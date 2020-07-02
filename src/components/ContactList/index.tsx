import React from 'react';

import { FaSearch, FaPlus } from 'react-icons/fa';

import { Container, ContactListContainer } from './styles';

import ContactItem from '../ContactItem';

const ContactList: React.FC = () => {
  return (
    <Container>
      <header>
        <img 
          src="https://avatars2.githubusercontent.com/u/48386738?s=400&u=3f9a149d5c9e6c854b0678f684a5b2c080ab6400&v=4" 
          alt="User"
        />

        <div>
          <strong>Gabriel Gigante</strong>
          <p>Lorem ipsum</p>
        </div>
      </header>

      <div className="input-container">
        <input type="text"/>
        <FaSearch size={18} />
      </div>

      <ContactListContainer>
        <div className="header">
          <strong>Clientes</strong>
          <button type="button">
            <FaPlus size={24} />
          </button>
        </div>

        <div className="contact-list">
          <ContactItem notification={3} />
          <ContactItem notification={3} />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
       
        </div>
      </ContactListContainer>
    </Container>
  );
}

export default ContactList;