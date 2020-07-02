import styled from 'styled-components';

export const Container = styled.div`
  /* height: 72px; */
  display: flex;
  padding: 16px;
  border-top: 1px solid #ddd;

  input {
    flex: 1;
    height: 38px;
    padding-left: 16px;
    margin-right: 12px;
    border: 1px solid #ddd;
    border-radius: 32px;
  }

  button {
    border: 0;
    background: transparent;
    margin: 8px;


    svg {
      font-size: 16px;
      color: #363636;
    }
  }
`;
