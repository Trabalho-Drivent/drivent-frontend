import styled from 'styled-components';
import SelectBox from './SelectBox';
import { useState } from 'react';

export default function TicketTypes() {
  const [selected, setSelected] = useState(false);
  const [ticket, setTicket] = useState(false);
  const [ticketType, setTicketType] = useState([false, false, false, false]);
  const array = [...ticketType];

  function calculateTicketPrice() {
    if (JSON.stringify(ticketType) === JSON.stringify([false, true, false, true])) return 250;
    if (JSON.stringify(ticketType) === JSON.stringify([false, true, true, false])) return 600;
    if (JSON.stringify(ticketType) === JSON.stringify([true, false, false, false])) return 100;
  }

  const ticketPrice = calculateTicketPrice();

  return (
    <>
      <Container>
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
