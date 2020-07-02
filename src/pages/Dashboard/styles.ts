import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #128C7E;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border-top-left-radius: 16px;
  margin-top: 12px;
  background: #fff;

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;

    > div.content {
      flex: 1;
      display: flex;
      flex-direction: row;
      overflow-y: hidden;
    }
  }
`;