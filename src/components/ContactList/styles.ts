import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 280px;

  header {
    display: flex;
    flex-direction: row;
    padding: 18px;

    img {
      width: 36px;
      height: 36px;
      border-radius: 18px;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 8px;

      strong {
        font-size: 16px;
      }
    }
  }

  div.input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #10b09e;
    margin: 6px 18px;
    border-radius: 8px;

    input {
      flex: 1%;
      height: 38px;
      padding-left: 12px;
      color: #fff;
      background: transparent;
      border: 0;
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const ContactListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  div.contact-list {
    overflow-y: auto;
    flex: 1;  
    /* for Firefox */
    min-height: 0;
  }

  div.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 10px 18px;

    strong {
      text-transform: uppercase;
      font-size: 18px;
      color: #f1f1f1;
    }

    button {
      background: transparent;
      border: 0;

      svg {
        color: #f1f1f1;
      }
    }
  }
`;