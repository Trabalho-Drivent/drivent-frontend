import styled from 'styled-components';
import SelectBox from './SelectBox';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import useToken from '../../../hooks/useToken';

export default function TicketTypes() {
  const [selected, setSelected] = useState(false);
  const [ticket, setTicket] = useState(false);
  const [ticketType, setTicketType] = useState([false, false, false, false]);
  const [ticketTypeId, setTicketTypeId] = useState();
  const array = [...ticketType];
  const token = useToken();

  useEffect(async() => {
    const ticketTypes = await api.get('/tickets/types', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const types = ticketTypes.data;
    setTicketTypeId(types);
  }, []);

  function checkTicketTypeId() {
    if (JSON.stringify(ticketType) === JSON.stringify([false, true, false, true])) return ticketTypeId[0].id;
    if (JSON.stringify(ticketType) === JSON.stringify([false, true, true, false])) return ticketTypeId[1].id;
    if (JSON.stringify(ticketType) === JSON.stringify([true, false, false, false])) return ticketTypeId[2].id;
  }

  const ticketId = checkTicketTypeId();

  return (
    <>
      <Container>
        {console.log(ticketTypeId)}
        {console.log(ticketId)}
        <h1>Primeiro, escolha sua modalidade de ingresso</h1>
        <Boxes>
          <SelectBox
            setSelected={setSelected}
            text={'Presencial'}
            textPrice={'R$250'}
            setTicket={setTicket}
            ticketType={ticketType[1]}
            setTicketType={setTicketType}
            array={array}
          />
          <SelectBox
            setSelected={setSelected}
            text={'Online'}
            textPrice={'R$100'}
            setTicket={setTicket}
            ticketType={ticketType[0]}
            setTicketType={setTicketType}
            array={array}
          />
        </Boxes>
      </Container>
      {selected.option && (
        <Container>
          <h1>Ótimo! Agora escolha sua modalidade de hospedagem</h1>
          <Boxes>
            <SelectBox
              setSelected={setSelected}
              text={'Sem Hotel'}
              textPrice={'R$0'}
              onClick={() => setTicket(true)}
              setTicket={setTicket}
              ticketType={ticketType[3]}
              setTicketType={setTicketType}
              array={array}
            />
            <SelectBox
              setSelected={setSelected}
              text={'Com Hotel'}
              textPrice={'R$350'}
              onClick={() => setTicket(true)}
              setTicket={setTicket}
              ticketType={ticketType[2]}
              setTicketType={setTicketType}
              array={array}
            />
          </Boxes>
        </Container>
      )}

      {ticket && 'buton'}
    </>
  );
}

const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  > h1 {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    font-family: 'Roboto';
    font-size: 34px;
    font-size: 20px;
    line-height: 23px;

    color: #8e8e8e;
  }
`;

const Boxes = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 20px;
`;
