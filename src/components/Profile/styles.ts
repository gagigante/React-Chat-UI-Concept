import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 320px;
  padding: 12px 16px;
  border-left: 1px solid #ddd;
  overflow-y: auto;

  div.header {
    margin-top: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 56px;
      height: 56px;
      border-radius: 28px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 12px;

      strong {
        color: #363636;
        font-size: 20px;
      }

      p {
        color: #128C7E;
        text-transform: uppercase;
      }
    }
  }

  div.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    button {
      flex: 1;
      margin: 6px;
      padding: 8px 24px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 6px;
    }
  }

  div.history {
    flex-direction: column;
    margin-top: 24px;

    strong {
      color: #128C7E;
      font-size: 18px;
    }

    div {
      margin-top: 18px;
      display: flex;
      justify-content: flex-start;

      p {
        margin-left: 12px;
        color: #363636
      }
    }
  }

  div.notes {
    flex-direction: column;
    margin-top: 24px;

    strong {
      color: #128C7E;
      font-size: 18px;
    }

    p {
      font-size: 14px;
      margin-top: 8px;
      color: #363636;
    }
  }

  div.contact {
    flex-direction: column;
    margin-top: 24px;

    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 12px;
      

      svg {
        margin-right: 12px;
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        span {
          color: #128C7E;
          text-transform: uppercase;
        }

        p {
          color: #363636;
        }
      }
    }
  }
`;
