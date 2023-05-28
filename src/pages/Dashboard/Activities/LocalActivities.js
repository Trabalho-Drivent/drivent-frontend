import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgEnter } from 'react-icons/cg';

export default function ActivitiesLocal({ title, start, end, slot }) {
  function handleHour(info) {
    const data = new Date(info);
    const time = data.toISOString().substring(11, 16);
    return time;
  }

  const startTime = start;
  const startObject = new Date(startTime);

  const endTime = end;
  const endObject = new Date(endTime);

  const height = endObject.getHours() - startObject.getHours();

  return (
    <Activity height={height}>
      <Text>
        <h1>{title}</h1>
        <h2>
          {handleHour(start)} - {handleHour(end)}
        </h2>
      </Text>
      <p></p>
      <Slot slot={slot}>
        {slot === 0 ? (
          <>
            <AiOutlineCloseCircle />
            <h1>Esgotado</h1>
          </>
        ) : (
          <>
            <CgEnter />
            <h1>{slot} vagas</h1>
          </>
        )}
      </Slot>
    </Activity>
  );
}

const Activity = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
  width: 265px;
  height: ${(props) => props.height * 79 + (props.height === 1 ? 0 : (props.height - 1) * 10)}px;
  background: #f1f1f1;
  border-radius: 5px;
  cursor: ${(props) => (props.disableBackground ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disableBackground ? '0.5' : '1')};
  > p {
    height: 80%;
    border: 1px solid #cfcfcf;
    transform: rotate(90);
  }
`;

const Text = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
  margin: 5px;
  > h2 {
    font-weight: 400;
  }
`;

const Slot = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 35px;
  margin: 5px;
  color: ${(props) => (props.slot === 0 ? '#CC6666' : '#078632')};
  > h1 {
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
  }
`;
