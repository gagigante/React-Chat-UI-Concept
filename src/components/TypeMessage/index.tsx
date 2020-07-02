import React from 'react';
import { FaPhotoVideo, FaPaperPlane, FaMicrophone, FaFile } from 'react-icons/fa';

import { Container } from './styles';

const TypeMessage: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Digite sua mensagem" />

      <button>
        <FaPhotoVideo />
      </button>
      <button>
        <FaFile />
      </button>
      <button>
        <FaMicrophone />
      </button>
      <button>
        <FaPaperPlane />
      </button>
    </Container>
  );
}

export default TypeMessage;