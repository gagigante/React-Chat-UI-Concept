import React from 'react';

import { Container, Text } from './styles';

interface ContactItemProps {
  number: number;
  size: number;
  fontSize: number;
  style?: object;
}

const Notification: React.FC<ContactItemProps> = ({ number, size, fontSize, style }) => {
  return (
    <Container
      containerSize={size}
      style={style ? style : {}}
    >
      <Text textSize={fontSize}>{ number }</Text>
    </Container>
  );
}

export default Notification;