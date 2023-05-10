import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import useEnrollment from '../../../hooks/api/useEnrollment';
import NoticePage from './NoticePage';

export default function Payment() {
  const { enrollment } = useEnrollment();

  return (
    <Container>
      <h1>Ingresso e pagamento</h1>
      {!enrollment ? <NoticePage /> : <Outlet />}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  > h1 {
    font-family: 'Roboto';
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 40px;
  }
`;
