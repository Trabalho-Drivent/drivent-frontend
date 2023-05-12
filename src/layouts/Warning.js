import styled from 'styled-components';

export default function Warning({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    height: 46px;
    width: 470px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: #8e8e8e;
  }
`;
