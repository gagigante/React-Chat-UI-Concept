import styled, { css } from 'styled-components';

interface MessageProps {
  isMine: boolean;
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MessagesContainer = styled.div`
  overflow-y: auto;
`;

export const MessageContainer = styled.div<MessageProps>`
  display: flex;
  flex-direction: column;
  margin: 32px;
  
  ${props => !props.isMine && 
    css`
      align-items: flex-end;
    ` 
  }
`;

export const Sender = styled.div<MessageProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: 280px; */

  ${props => !props.isMine && 
    css`
      flex-direction: row-reverse;
    `
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }

  strong {
    color: #363636;
    font-size: 16px;

    ${props => props.isMine ? 
      css`
        margin-left: 6px;
      ` :
      css`
        margin-right: 6px;
      `
    }
  }

  p {
    color: #363636;
    
    ${props => props.isMine ? 
      css`
        margin-left: 8px;
      ` :
      css`
        margin-right: 8px;
      `
    }
  }

  svg {
    ${props => props.isMine ? 
      css`
        margin-left: 8px;
      ` :
      css`
        margin-right: 8px;
      `
    }
  }
`;

export const Message= styled.div<MessageProps>`
  width: 300px;
  margin-top: 24px;
  padding: 32px;
  border-radius: 6px;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);

  ${props => props.isMine ? 
    css`
      background: #fff;
    ` :
    css`
      background: rgba(106, 235, 227, 0.2);
    `
  }

  p {
    color: #000;
    font-size: 14px;
    line-height: 1.6;
  }
`;

