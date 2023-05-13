import styled from 'styled-components';
import Warning from '../../../layouts/Warning';

export default function Hotel() {
  return (
    <Container>
      <h1>Escolha de hotel e quarto</h1>
      <Warning>
        {/* <p>Sua modalidade de ingresso não inclui hospedagem Prossiga para escolha de atividades</p> */}
        <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
      </Warning>
    </Container>
  );
}

const Container = styled.div`
 height: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: 'Roboto';
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 40px;
  }
`;