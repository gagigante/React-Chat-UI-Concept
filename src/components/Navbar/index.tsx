import React from 'react';
import { FaCalendar, FaSearch } from 'react-icons/fa';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <FaCalendar size={20} color="#ddd" />
      <div className="input-container">
        <input type="text"/>
        <FaSearch size={16} />
      </div>

      <div>
        <button className="outline">Transferir</button>
        <button>Finalizar atendimento</button>
      </div>
    </Container>
  );
}

export default Navbar;