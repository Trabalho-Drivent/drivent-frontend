import styled from 'styled-components';
import ActivitiesLocal from './LocalActivities';

export default function ActivitiesContainer({ userActivities, activity }) {
  return (
    <Container>
      <Box>
        {activity.map((info, i) => (
          <ActivitiesLocal
            key={i}
            title={info.name}
            start={info.startsAt}
            end={info.endsAt}
            slot={info.available}
            id={info.id}
            userActivities={userActivities}
          />
        ))}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  height: 100%;
  border: 1px solid #d7d7d7;
  margin-top: 10px;
  font-weight: 400;
  font-size: 17px;
  color: #7b7b7b;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #D7D7D7;
    border-radius: 10px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
