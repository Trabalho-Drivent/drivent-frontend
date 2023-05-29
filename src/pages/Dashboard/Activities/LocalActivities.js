import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgEnter } from 'react-icons/cg';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { addUserActivities } from '../../../services/activityApi';
import useToken from '../../../hooks/useToken';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ActivitiesLocal({ id, userActivities, title, start, end, slot }) {
  const token = useToken();
  const activitiesIds = userActivities.map(userActivity => userActivity.activityId);
  const [userActivitiesIds, setUserActivitiesIds] = useState(activitiesIds);

  function handleHour(info) {
    const data = new Date(info);
    const time = data.toISOString().substring(11, 16);
    return time;
  }

  const disableBackground = slot === 0 ? true : false;
  const startTime = start;
  const startObject = new Date(startTime);

  const endTime = end;
  const endObject = new Date(endTime);

  const height = endObject.getHours() - startObject.getHours();

  async function addActivity() {
    try {
      const data = await addUserActivities(token, id);
      const newArray = [...userActivitiesIds, data.activityId];
      setUserActivitiesIds(newArray);
    } catch (error) {
      if(error.response.status === 409) {
        toast('Conflito de horário');
      }
      console.log('Error: addActivity');
    }
  }

  return (
    <Activity height={height} disableBackground={disableBackground}>
      <Text>
        <h1>{title}</h1>
        <h2>
          {handleHour(start)} - {handleHour(end)}
        </h2>
      </Text>
      <p></p>
      <Slot slot={slot}>
        {userActivitiesIds.includes(id) &&
          <ButtonArea>
            <IoCheckmarkCircleOutline className='icon' />
            <h1>Inscrito</h1>
          </ButtonArea>
        }
        {!userActivitiesIds.includes(id) && slot === 0 &&
          <ButtonArea disableBackground={disableBackground}>
            <AiOutlineCloseCircle className='icon' />
            <h1>Esgotado</h1>
          </ButtonArea>
        }
        {!userActivitiesIds.includes(id) && slot !== 0 &&
          <ButtonArea onClick={addActivity}>
            <CgEnter className='icon' />
            <h1>{slot} vagas</h1>
          </ButtonArea>
        }
      </Slot>
    </Activity>
  );
}

const Activity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 7px;
  max-width: 265px;
  height: ${(props) => props.height * 79 + (props.height === 1 ? 0 : (props.height - 1) * 10)}px;
  background: #f1f1f1;
  border-radius: 5px;
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
  > h2 {
    margin-top: 5px;
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
const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: ${(props) => props.disableBackground ? '' : 'pointer'};

  .icon{
    width: 20px;
    height: 20px;
  }
  h1{
    font-size: 9px;
  }
`;
