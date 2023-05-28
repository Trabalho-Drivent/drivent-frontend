import styled from 'styled-components';
import api from '../../services/api';
import useToken from '../../hooks/useToken';

export default function FilterButton({ weekDay, date, setActivities }) {
  const token = useToken();
  let isoDate = '';
  if (date === '10/05') isoDate = '2023-05-10';
  if (date === '11/05') isoDate = '2023-05-11';
  if (date === '12/05') isoDate = '2023-05-12';

  async function filterActivities() {
    const activitiesFilter = await api.get('/activities/2023-05-10', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setActivities(activitiesFilter.data);
  }

  return (
    <>
      <DayButton onClick={filterActivities}>
        <p>
          {weekDay}, {date}
        </p>
      </DayButton>
    </>
  );
}

const DayButton = styled.button`
  width: 131px;
  height: 37px;
  background: #ffd37d;
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
