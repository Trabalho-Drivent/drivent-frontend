import styled from 'styled-components';
import SelectBox from './SelectBox';
import { useState } from 'react';

export default function TicketTypes() {
  const [selected, setSelected] = useState(false);
  const [ticket, setTicket] = useState(false);
  const [isChosenPresencial, setIsChosenPresencial] = useState(false);
  const [isChosenOnline, setIsChosenOnline] = useState(false);
  const [isChosenSemHotel, setIsChosenSemHotel] = useState(false);
  const [isChosenComHotel, setIsChosenComHotel] = useState(false);

  return (
    <>
      <Container>
        <h1>Primeiro, escolha sua modalidade de ingresso</h1>
        <Boxes>
          <SelectBox
            isChosenPresencial={isChosenPresencial}
            setIsChosenPresencial={setIsChosenPresencial}
            setIsChosenOnline={setIsChosenOnline}
            setSelected={setSelected}
            text={'Presencial'}
            textPrice={'R$250'}
            setTicket={setTicket}
          />
          <SelectBox
            isChosenOnline={isChosenOnline}
            setIsChosenPresencial={setIsChosenPresencial}
            setIsChosenOnline={setIsChosenOnline}
            setSelected={setSelected}
            text={'Online'}
            textPrice={'R$100'}
            setTicket={setTicket}
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
            />
            <SelectBox
              setSelected={setSelected}
              text={'Com Hotel'}
              textPrice={'R$350'}
              onClick={() => setTicket(true)}
              setTicket={setTicket}
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
