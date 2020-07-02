import React from 'react';

import { FaEdit, FaTrash, FaWhatsapp, FaSkype, FaEnvelope } from 'react-icons/fa';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <img
          src="https://avatars2.githubusercontent.com/u/48386738?s=400&u=3f9a149d5c9e6c854b0678f684a5b2c080ab6400&v=4" 
          alt="Contact"
        />
        <div>
          <strong>Gabriel Gigante</strong>
          <p>Empresa</p>
        </div>
      </div>

      <div className="actions">
        <button>
          <FaEdit size={18} color="#1fcfba" />
        </button>

        <button>
          <FaTrash size={18} color="#cf4b1f" />
        </button>
      </div>

      <div className="history">
        <strong>últimas conversas</strong>

        <div>
          <FaWhatsapp size={18} color="#ddd" />
          <p>24/06/2020 (10 dias atrás)</p>
        </div>
        <div>
          <FaWhatsapp size={18} color="#ddd" />
          <p>24/06/2020 (10 dias atrás)</p>
        </div>
        <div>
          <FaSkype size={18} color="#ddd" />
          <p>24/06/2020 (10 dias atrás)</p>
        </div>
      </div>

      <div className="notes">
        <strong>Observações</strong>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud</p>
      </div>

      <div className="contact">
        <div>
          <FaWhatsapp size={20} color="#ddd" />
          <div>
            <span>Whatsapp</span>
            <p>+55 (11) 9 6859-5762</p>
          </div>
        </div>
        <div>
          <FaEnvelope size={20} color="#ddd" />
          <div>
            <span>E-mail</span>
            <p>gabriel_gigante@outlook.com</p>
          </div>
        </div>
        <div>
          <FaSkype size={20} color="#ddd" />
          <div>
            <span>Skype</span>
            <p>@example</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Profile;