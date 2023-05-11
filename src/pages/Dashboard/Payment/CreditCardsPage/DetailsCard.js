import styled from 'styled-components';

export default function DetailsCard() {
  return (
    <Container>
      <div>
        <p>Presencial + Com Hotel</p>
        <span>R$ 600</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 290px;
  height: 108px;
  background: #ffeed2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  > div {
    text-align: center;
    > p {
      font-family: 'Roboto';
      font-size: 16px;
      line-height: 19px;
      color: #454545;
      margin-bottom: 8px;
    }
    > span {
      font-family: 'Roboto';
      font-size: 14px;
      line-height: 16px;
      color: #898989;
    }
  }
`;
