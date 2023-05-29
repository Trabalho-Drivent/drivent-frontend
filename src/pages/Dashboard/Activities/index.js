import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import ActivitiesContainer from './ActivitiesContainer';
import FilterButton from '../../../components/Activities/FilterButton';
import { useContext } from 'react';
import EventInfoContext from '../../../contexts/EventInfoContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserActivities } from '../../../services/activityApi';
import useToken from '../../../hooks/useToken';

export default function Activities() {
  const token = useToken();
  const { ticket } = useTicket();
  const { eventInfo } = useContext(EventInfoContext);

  const [userActivities, setUserActivities] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(async() => {
    let data = await getUserActivities(token);
    setUserActivities(data);
  }, []);

  const days = new Date(eventInfo.startsAt);

  const activitiesDays = [];
  for (let i = 0; i < 3; i++) {
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
            {activitiesDays.map((day, i) => (
              <FilterButton
                weekDay={day.weekDay}
                date={day.date}
                setActivities={setActivities}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                key={i}
                i={i}
              />
            ))}
          </ButtonsContainer>
          <ActivitiesBox>
            {activities &&
              activities.map((local) => (
                <ActivitiesColumn>
                  <div className="title">{local.name}</div>
                  <ActivitiesContainer
                    name={local.name}
                    activity={local.activities}
                    key={local.id}
                    userActivities={userActivities}
                  />
                </ActivitiesColumn>
              ))}
          </ActivitiesBox>
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
  overflow: hidden;
`;

const ActivitiesBox = styled.div`
  display: flex;
  height: 390px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const ActivitiesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .title{
    color: #7B7B7B;
  }
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
  padding-bottom: 50px;
  gap: 15px;
`;
