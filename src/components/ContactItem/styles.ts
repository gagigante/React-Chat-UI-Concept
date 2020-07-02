import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.button`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  background: transparent;
  border: 0;
  transition: 0.1s;

  &:hover {
    background: ${shade(0.05, '#128C7E')};
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 18px;
  }

  div {
    margin-left: 8px;

    strong {
      font-size: 16px;
      color: #f1f1f1;
    }

    p {
      font-size: 14px;
      text-align: left;
      text-transform: uppercase;
      color: #11d9c2;
    }
  }
`;
