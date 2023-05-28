import styled from 'styled-components';
import ActivitiesLocal from './LocalActivities';

export default function ActivitiesConteiner({ name, activity }) {
  return (
    <Container>
      <Box>
        <h1>{name}</h1>
        {activity.map((info) => (
          <ActivitiesLocal title={info.name} start={info.startsAt} end={info.endsAt} slot={info.slot}></ActivitiesLocal>
        ))}
      </Box>
      {/* <Box>
        <h1>Auditório Lateral</h1>
        <ActivitiesLocal></ActivitiesLocal>
      </Box>
      <Box>
        <h1>Sala de Workshop</h1>
        <ActivitiesLocal></ActivitiesLocal>
      </Box> */}
    </Container>
  );
}

const Container = styled.div`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #7b7b7b;
  display: flex;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #D7D7D7;
`;
