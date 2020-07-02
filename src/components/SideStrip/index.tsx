import React from 'react';
import { FaWhatsapp, FaEnvelope, FaSkype, FaPhone, FaStickyNote } from 'react-icons/fa';

import Notification from '../../components/Notification';

import { Container } from './styles';

const SideStrip: React.FC = () => {
  return (
    <Container>
      <button>
        <FaWhatsapp size={24} color="#42f560" />
        <Notification 
          style={{ position: 'absolute', right: 8, bottom: 12 }} 
          number={3} 
          size={16} 
          fontSize={12} 
        />
      </button>
      <button>
        <FaEnvelope size={24} color="#f56f42" />
        <Notification 
          style={{ position: 'absolute', right: 8, bottom: 12 }} 
          number={3} 
          size={16} 
          fontSize={12} 
        />
      </button>
      <button>
        <FaSkype size={24} color="#42f5d7" />
      </button>
      <button>
        <FaPhone size={24} color="#9942f5" />
      </button>
      <button>
        <FaStickyNote size={24} color="#f5b342" />
      </button>
    </Container>
  );
}

export default SideStrip;