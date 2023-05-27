import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import ActivitiesConteiner from './ActivitiesConteiner';

export default function Hotel() {
  const { ticket } = useTicket();

  return (
    <>
      {!ticket && (
        <>
          <Container>
            <Title>Escolha de atividades </Title>
            <Notice>
              <p>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</p>
            </Notice>
          </Container>
        </>
      )}
      {ticket && ticket.status !== 'PAID' && (
        <>
          <Container>
            <Title>Escolha de atividades </Title>
            <Notice>
              <p>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</p>
            </Notice>
          </Container>
        </>
      )}
      {ticket && ticket.TicketType.isRemote === true && (
        <>
          <Container>
            <Title>Escolha de atividades </Title>
            <Notice>
              <p>
                Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
              </p>
            </Notice>
          </Container>
        </>
      )}
      {ticket && !ticket.TicketType.isRemote && (
        <Container>
          <Title>Escolha de atividades </Title>
          <ActivitiesConteiner></ActivitiesConteiner>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-family: 'Roboto';
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 40px;
`;

const Notice = styled.div`
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
    text-align: center;
    color: #8e8e8e;
  }
`;
