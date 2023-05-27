import styled from 'styled-components';
import ActivitiesLocal from './LocalActivities';

export default function ActivitiesConteiner() {
  return (
    <Container>
      <Box>
        <h1>Auditório Principal</h1>
        <ActivitiesLocal></ActivitiesLocal>
      </Box>
      <Box>
        <h1>Auditório Lateral</h1>
        <ActivitiesLocal></ActivitiesLocal>
      </Box>
      <Box>
        <h1>Sala de Workshop</h1>
        <ActivitiesLocal></ActivitiesLocal>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 80px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #7b7b7b;
  display: flex;
`;

const Box = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
`;
