import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import ActivitiesConteiner from './ActivitiesConteiner';
import FilterButton from '../../../components/Activities/FilterButton';
import { useContext } from 'react';
import EventInfoContext from '../../../contexts/EventInfoContext';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../../services/api';

export default function Activities() {
  const { ticket } = useTicket();
  const { eventInfo } = useContext(EventInfoContext);

  const [activities, setActivities] = useState([]);

  const days = new Date(eventInfo.startsAt);

  const activitiesDays = [];
  for (let i = 1; i < 4; i++) {
    const currentDate = new Date(days.getTime() + i * 24 * 60 * 60 * 1000);
    const activityDay = {
      weekDay: currentDate.toLocaleDateString('pt-BR', { weekday: 'long' }),
      date: currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
    };
    activitiesDays.push(activityDay);
  }

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
          <ButtonsContainer>
            {activitiesDays.map((day) => (
              <FilterButton weekDay={day.weekDay} date={day.date} setActivities={setActivities} />
            ))}
          </ButtonsContainer>
          <Box>
            {activities.map((local) => (
              <ActivitiesConteiner name={local.name} activity={local.activities}></ActivitiesConteiner>
            ))}
          </Box>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  height: 392px;
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

const ButtonsContainer = styled.div`
  display: flex;
  padding-bottom: 80px;
  gap: 15px;
`;
