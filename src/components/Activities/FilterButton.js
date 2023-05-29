import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import { activitiesFilter } from '../../services/activityApi';

export default function FilterButton({ weekDay, date, setActivities, selectedDay, setSelectedDay, i }) {
  const token = useToken();
  let year = new Date().getFullYear();
  let split = date.split('/');
  let formattedDate = year + '-' + split[1] + '-' + split[0];

  async function filterActivities() {
    setSelectedDay(i);
    const data = await activitiesFilter(token, formattedDate);
    setActivities(data);
  }

  return (
    <>
      <DayButton selectedDay={selectedDay} i={i} onClick={filterActivities}>
        <p>
          {weekDay}, {date}
        </p>
      </DayButton>
    </>
  );
}

const DayButton = styled.button`
  width: 150px;
  height: 37px;
  background: ${(props) => (props.selectedDay === props.i ? '#FFD37D' : '#E0E0E0')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border-style: none;
  cursor: pointer;
`;
