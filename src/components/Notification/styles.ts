import styled from 'styled-components';

interface ContainerProps {
  containerSize: number;
}

interface TextProps {
  textSize: number;
}

export const Container = styled.div<ContainerProps>`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #fff; */
  width: ${props => props.containerSize}px;
  height: ${props => props.containerSize}px;
  border-radius: ${props => props.containerSize/2}px;
`;

export const Text = styled.span<TextProps>`
  color: #fff;
  font-size: ${props => props.textSize}px;
`;