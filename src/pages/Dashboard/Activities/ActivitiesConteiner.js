import styled from 'styled-components';
import ActivitiesLocal from './LocalActivities';

export default function ActivitiesConteiner({ name, activity }) {
  return (
    <Container>
      <Box>
        <h1>{name}</h1>
        <Line>
          {activity.map((info) => (
            <ActivitiesLocal
              title={info.name}
              start={info.startsAt}
              end={info.endsAt}
              slot={info.slot}
              key={info.id}
            ></ActivitiesLocal>
          ))}
        </Line>
      </Box>
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

const Line = styled.div`
  height: 100%;
  border: 1px solid #d7d7d7;
  width: auto;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;

  overflow: scroll;
`;
