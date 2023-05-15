import styled from 'styled-components';

export default function Warning({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 34px;
}
  p {
    height: 46px;
    width: 470px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-top: 200px;
    text-align: center;
    color: #8e8e8e;
  }
`;
