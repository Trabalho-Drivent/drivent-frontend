import styled from 'styled-components';
import DetailsCard from './DetailsCard';
import FormCard from './FormCard';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { useState } from 'react';

export default function CreditCardsPage({ userTicket }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <Container>
      <h2>Ingresso escolhido</h2>
      <DetailsCard userTicket={userTicket}/>
      <h2>Pagamento</h2>
      {buttonClicked ? (
        <FinalizePayment>
          <IoCheckmarkCircleSharp />
          <div>
            <p>Pagamento confirmado!</p>
            <span>Prossiga para escolha de hospedagem e atividades</span>
          </div>
        </FinalizePayment>
      ) : (
        <FormCard setButtonClicked={setButtonClicked} userTicket={userTicket} />
      )}
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

const FinalizePayment = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  > svg {
    width: 44px;
    height: 44px;
    fill: #36b853;
  }
  > div > p,
  span {
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }
`;
