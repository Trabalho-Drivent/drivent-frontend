import styled from 'styled-components';
import DetailsCard from './DetailsCard';
import FormCard from './FormCard';

export default function CreditCardsPage() {
  return (
    <Container>
      <h2>Ingresso escolhido</h2>
      <DetailsCard />
      <h2>Pagamento</h2>
      <FormCard />
    </Container>
  );
}

const Container = styled.div`
  > h2 {
    font-family: 'Roboto';
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 17px;
  }
`;
