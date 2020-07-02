import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* height: 72px; */
  display: flex;
  align-items: center;
  padding: 6px 24px;
  border-bottom: 1px solid #ddd;

  div.input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border: 1px solid #ddd;
    margin: 4px 18px;
    border-radius: 8px;

    input {
      flex: 1%;
      height: 32px;
      padding-left: 12px;
      color: #363636;
      background: transparent;
      border: 0;
    }

    svg {
      margin: 10px;
      color: #ddd;
    }
  }

  > div {
    margin-left: auto;
    
    button {
      margin-right: 8px;
      padding: 8px 16px;
      background: #42b0f5;
      color: #fff;
      border: 1px solid #42b0f5;
      border-radius: 8px;
    }

    button.outline {
      color: #42b0f5;
      background-color: #fff;
      border: 1.2px solid #42b0f5;
    }
  }
`;
