import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgEnter } from 'react-icons/cg';
export default function ActivitiesLocal() {
  return (
    <Container>
      <Activity>
        <Text>
          <h1>Minecraft: montando o PC ideal</h1>
          <h2>09:00 - 10:00</h2>
        </Text>
        <p></p>
        <Slot>
          <CgEnter></CgEnter>
          <h1>10 vagas</h1>
          {/* <AiOutlineCloseCircle></AiOutlineCloseCircle>
              <h1>Esgotado</h1> */}
        </Slot>
      </Activity>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #d7d7d7;
  height: 392px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Activity = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 265px;
  height: 79px;
  background: #f1f1f1;
  border-radius: 5px;
  position: relative;
  > p {
    height: 80%;
    border: 1px solid #cfcfcf;
    transform: rotate(90);
  }
`;

const Text = styled.div`
  width: 200px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;

  > h2 {
    font-weight: 400;
  }
`;

const Slot = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 35px;
  color: #078632;

  > h1 {
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
  }
`;
